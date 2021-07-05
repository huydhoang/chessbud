import {
  WebSocket,
  isWebSocketCloseEvent,
} from 'https://deno.land/std/ws/mod.ts';
import { v4 } from 'https://deno.land/std/uuid/mod.ts';

interface SocketUser {
  username: string | null;
  socket: WebSocket;
}

interface BroadcastObject {
  username: string;
  message: string;
}

const activeSockets = new Map<string, SocketUser>();

const messageHistory: BroadcastObject[] = [];

// broadcast events to all clients
const broadcastEvent = (obj: BroadcastObject) => {
  activeSockets.forEach((user: SocketUser) => {
    user.socket.send(JSON.stringify(obj));
  });
};

// const socketEventHandler = async (ws: WebSocket) => {
//   console.log('new socket conn');
//   // add new socket to map
//   // const uid = v4.generate();
//   // activeSockets.set(uid, { username: null, socket: ws });
//   // // console.log(activeSockets);
//   for await (const ev of ws) {
//     console.log(ev);
//     //   // delete socket if client disconnected
//     //   if (isWebSocketCloseEvent(ev)) {
//     //     activeSockets.delete(uid);
//     //     console.log(activeSockets);
//     //   }
//     //   // parse event data
//     //   if (typeof ev === 'string') {
//     //     const evObject = JSON.parse(ev);
//     //     console.log(evObject);
//     //     if (evObject.event === 'join' && typeof evObject.username === 'string') {
//     //       const userJoined = {
//     //         username: evObject.username,
//     //         message: 'joined the chat',
//     //       };
//     //       messageHistory.push(userJoined);
//     //       messageHistory.forEach((obj: BroadcastObject) => {
//     //         broadcastEvent(obj);
//     //       });
//     //       activeSockets.set(uid, { username: evObject.username, socket: ws });
//     //       console.log(activeSockets);
//     //     } else {
//     //       broadcastEvent(evObject);
//     //       messageHistory.push(evObject);
//     //     }
//     //   }
//   }
// };

const clients = new Map<number, WebSocket>();
let clientId = 0;
function dispatch(msg: string): void {
  for (const client of clients.values()) {
    client.send(msg);
  }
}
export const wsEventHandler = async (ws: WebSocket) => {
  const id = ++clientId;
  clients.set(id, ws);
  dispatch(`Connected: [${id}]`);
  for await (const msg of ws) {
    console.log(`msg:${id}`, msg);
    if (typeof msg === 'string') {
      // dispatch(`[${id}]: ${msg}`);
      dispatch(msg);
    } else if (isWebSocketCloseEvent(msg)) {
      clients.delete(id);
      dispatch(`Closed: [${id}]`);
      break;
    }
  }
};

// export { socketEventHandler };
