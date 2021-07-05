import {
  serve,
  ServerRequest,
  Response,
} from 'http://deno.land/std/http/server.ts';
import { extname, fromFileUrl } from 'http://deno.land/std/path/mod.ts';
import { acceptWebSocket, acceptable } from 'https://deno.land/std/ws/mod.ts';
import { wsEventHandler } from './ws/handler.ts';

// setup server
const server = serve({ port: 8080 });
console.log('http://localhost:8080/');

const encoder = new TextEncoder();

const MEDIA_TYPES: Record<string, string> = {
  '.md': 'text/markdown',
  '.html': 'text/html',
  '.htm': 'text/html',
  '.json': 'application/json',
  '.map': 'application/json',
  '.txt': 'text/plain',
  '.ts': 'text/typescript',
  '.tsx': 'text/tsx',
  '.js': 'application/javascript',
  '.jsx': 'text/jsx',
  '.gz': 'application/gzip',
  '.css': 'text/css',
  '.wasm': 'application/wasm',
  '.mjs': 'application/javascript',
  '.svg': 'image/svg+xml',
};

/** Returns the content-type based on the extension of a path. */
function contentType(path: string): string | undefined {
  return MEDIA_TYPES[extname(path)];
}

/**
 * Returns an HTTP Response with the requested file as the body
 * @param req The server request context used to cleanup the file handle
 * @param filePath Path of the file to serve
 */
const serveFile = async (
  req: ServerRequest,
  filePath: string
): Promise<Response> => {
  const [file, fileInfo] = await Promise.all([
    Deno.open(filePath),
    Deno.stat(filePath),
  ]);
  const headers = new Headers();
  headers.set('content-length', fileInfo.size.toString());
  const contentTypeValue = contentType(filePath);
  if (contentTypeValue) {
    headers.set('content-type', contentTypeValue);
  }
  req.done.then(() => {
    file.close();
  });
  return {
    status: 200,
    body: file,
    headers,
  };
};

const serveFallback = (_req: ServerRequest, e: Error): Promise<Response> => {
  if (e instanceof URIError) {
    return Promise.resolve({
      status: 400,
      body: encoder.encode('Bad Request'),
    });
  } else if (e instanceof Deno.errors.NotFound) {
    return Promise.resolve({
      status: 404,
      body: encoder.encode('Not Found'),
    });
  } else {
    return Promise.resolve({
      status: 500,
      body: encoder.encode('Internal server error'),
    });
  }
};

for await (const req of server) {
  let response;

  if (req.method === 'GET') {
    console.log('GET', req.url);

    if (req.url === '/') {
      // serve home page from absolute path
      // safe to run server.ts from any working directory
      const absoluteURL = new URL('./pages/home/index.html', import.meta.url);
      response = await serveFile(req, fromFileUrl(absoluteURL));
      req.respond(response);
    }
    // else if links to a global asset
    else if (req.url.startsWith('/assets/')) {
      try {
        // serve global assets
        const absoluteURL = new URL(`.${req.url}`, import.meta.url);
        response = await serveFile(req, fromFileUrl(absoluteURL));
      } catch (error) {
        // fallback and log to console gracefully
        response = await serveFallback(req, error);
        console.log('=>', response.status, error.message);
      }
      req.respond(response);
    }
    // else if not websocket
    else if (req.url !== '/ws') {
      // if links to a specific file
      if (req.url.indexOf('.') !== -1) {
        try {
          // serve as page modules
          const absoluteURL = new URL(`./pages${req.url}`, import.meta.url);
          response = await serveFile(req, fromFileUrl(absoluteURL));
        } catch (error) {
          // fallback response and log to console gracefully
          response = await serveFallback(req, error);
          console.log('=>', response.status, error.message);
        }
      } else {
        try {
          // serve as index pages
          const path = `./pages${req.url}/index.html`;
          const absoluteURL = new URL(path, import.meta.url);
          response = await serveFile(req, fromFileUrl(absoluteURL));
        } catch (error) {
          // fallback response and log to console gracefully
          response = await serveFallback(req, error);
          console.log('=>', response.status, error.message);
        }
      }
      req.respond(response);
    } else if (acceptable(req)) {
      // accept ws connection
      acceptWebSocket({
        conn: req.conn,
        bufReader: req.r,
        bufWriter: req.w,
        headers: req.headers,
      })
        .then(wsEventHandler)
        .catch(async (err) => {
          console.error(`failed to accept websocket: ${err}`);
          await req.respond({ status: 400 });
        });
    }
  }
}
