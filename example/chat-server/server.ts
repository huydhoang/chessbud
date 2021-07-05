// Copyright 2018-2021 the Deno authors. All rights reserved. MIT license.
import { listenAndServe } from 'http://deno.land/std/http/server.ts';

import {
  acceptable,
  acceptWebSocket,
  isWebSocketCloseEvent,
  WebSocket,
} from 'https://deno.land/std/ws/mod.ts';
import { fromFileUrl } from 'https://deno.land/std/path/mod.ts';

const clients = new Map<number, WebSocket>();
let clientId = 0;
function dispatch(msg: string): void {
  for (const client of clients.values()) {
    client.send(msg);
  }
}
async function wsHandler(ws: WebSocket) {
  const id = ++clientId;
  clients.set(id, ws);
  dispatch(`Connected: [${id}]`);
  for await (const msg of ws) {
    console.log(`msg:${id}`, msg);
    if (typeof msg === 'string') {
      dispatch(`[${id}]: ${msg}`);
    } else if (isWebSocketCloseEvent(msg)) {
      clients.delete(id);
      dispatch(`Closed: [${id}]`);
      break;
    }
  }
}

listenAndServe({ port: 8080 }, async (req) => {
  if (req.method === 'GET' && req.url === '/') {
    //Serve with hack
    const u = new URL('./index.html', import.meta.url);
    console.log(u);
    console.log(import.meta.url);
    console.log(fromFileUrl(u));

    // server launched by deno run ./server.ts
    const file = await Deno.open(fromFileUrl(u));
    req.respond({
      status: 200,
      headers: new Headers({
        'content-type': 'text/html',
      }),
      body: file,
    });
  }
  if (req.method === 'GET' && req.url === '/favicon.ico') {
    req.respond({
      status: 302,
      headers: new Headers({
        location: 'https://deno.land/favicon.ico',
      }),
    });
  }
  if (req.method === 'GET' && req.url === '/ws') {
    if (acceptable(req)) {
      acceptWebSocket({
        conn: req.conn,
        bufReader: req.r,
        bufWriter: req.w,
        headers: req.headers,
      }).then(wsHandler);
    }
  }
});
console.log('chat server starting on :8080....');
