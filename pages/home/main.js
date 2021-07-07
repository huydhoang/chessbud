// Import libs
import {
  Chessboard,
  COLOR,
  INPUT_EVENT_TYPE,
  MARKER_TYPE,
} from '../../assets/chess/cm-chessboard@v3.12.14.js';
import { Chess } from '../../assets/chess/chessjs@v0.12.0.js';

// New game
const GAME = new Chess();
// Create chessboard
const BOARD = new Chessboard(document.getElementById('board'), {
  position: GAME.fen(),
  sprite: { url: '/assets/chess/images/chessboard-sprite-staunty.svg' },
  style: {
    aspectRatio: 1,
    moveMarker: MARKER_TYPE.square,
    hoverMarker: undefined,
  },
  orientation: COLOR.white,
});

// Global variables
let SQUARE_FROM, SQUARE_TO, PROMO_CHOICE;
let PLAY_MODE = 'local';
let PLAY_COLOR = 'w';
const ENGINE_DEPTH = 13;

const PLAYERS = { w: 'human', b: 'bot' };

// DOM refs
const GAME_SETTINGS = document.getElementById('game-settings');
const SELECT_PLAY_MODE = document.getElementById('select-play-mode');
const SELECT_PLAY_COLOR = document.getElementById('select-play-color');
const buttonStart = document.getElementById('button-start');

// Listen for play mode selection
['local', 'bot', 'network'].forEach((mode) => {
  const buttonMode = document.getElementById(`button-mode-${mode}`);
  buttonMode.addEventListener('click', () => {
    PLAY_MODE = mode;
    SELECT_PLAY_MODE.style.display = 'none';
    if (mode === 'local') {
      GAME_SETTINGS.style.display = 'none';
      buttonStart.click();
    } else {
      SELECT_PLAY_COLOR.style.display = 'flex';
    }
  });
});

// Listen for play color selection
for (let i = 1; i <= 3; i++) {
  const radio = document.getElementById(`radio-color-${i}`);
  radio.addEventListener('change', () => {
    const colors = ['w', 'b'];
    if (colors.indexOf(radio.value) !== -1) {
      PLAY_COLOR = radio.value;
    } else {
      // if user chose random color
      PLAY_COLOR = colors[Math.round(Math.random())];
    }
  });
}

// Enable board input according to play mode
buttonStart.addEventListener('click', () => {
  GAME_SETTINGS.style.display = 'none';
  // ws.send(`game mode: ${PLAY_MODE}`);
  switch (PLAY_MODE) {
    case 'local': {
      PLAYERS.w = PLAYERS.b = 'human';
      console.log(PLAYERS);
      BOARD.enableMoveInput(localModeInputHandler);
      break;
    }

    case 'bot': {
      BOARD.enableMoveInput(botModeInputHandler, PLAY_COLOR);
      break;
    }

    case 'network': {
      console.log('network');

      break;
    }

    default:
      break;
  }
});

// tomitank 5.0 elo 2980 https://github.com/tomitank/tomitankChess
const tomitank = new Worker('../../assets/chess/engines/tomitankChess.js');
tomitank.postMessage('uci'); // get build info
tomitank.postMessage('ucinewgame'); // start a new game
tomitank.onmessage = function (e) {
  console.log(e.data);
  // if (!e.data.startsWith('info')) {
  //   console.log(e.data);
  // }
  if (e.data.startsWith('bestmove')) {
    const bestMove = e.data.split(' ')[1];
    // console.log(bestMove);

    if (PLAYERS[GAME.turn()] === 'bot') {
      const squareFrom = bestMove.slice(0, 2);
      const squareTo = bestMove.slice(2, 4);
      const promoChoice = bestMove.slice(4, 5);
      const isValidPromotion = ['q', 'r', 'b', 'n'].indexOf(promoChoice) !== -1;

      if (isValidPromotion) {
        GAME.move({
          from: squareFrom,
          to: squareTo,
          promotion: promoChoice,
        });
      } else {
        GAME.move({
          from: squareFrom,
          to: squareTo,
        });
      }
      BOARD.setPosition(GAME.fen());
      BOARD.enableMoveInput(botModeInputHandler, GAME.turn());
    }
  }
};

// lozza 2.0 elo 2604 https://github.com/op12no2/lozza
// const lozza = new Worker('../../assets/chess/lozza.js');
// lozza.onmessage = function (e) {
//   console.log(e.data);
// };

// lozza.postMessage('uci'); // get build etc
// lozza.postMessage('ucinewgame'); // reset TT

// Listen for promotion choice by human player
const promoModal = document.getElementById('promotion');
const promoPieces = document.querySelectorAll('.promo-piece');
for (let i = 0; i < promoPieces.length; i++) {
  promoPieces[i].addEventListener('click', (e) => {
    // console.log(e.target.getAttribute('data-piece'));
    PROMO_CHOICE = e.target.getAttribute('data-piece');
    const isValidPromotion = ['q', 'r', 'b', 'n'].indexOf(PROMO_CHOICE) !== -1;
    if (isValidPromotion) {
      const move = {
        from: SQUARE_FROM,
        to: SQUARE_TO,
        promotion: PROMO_CHOICE,
      };
      const result = GAME.move(move);
      if (result) {
        promoModal.style.display = 'none';
        BOARD.setPosition(GAME.fen());
        // bot callback if playing with bot
        if (PLAYERS[GAME.turn()] === 'bot') {
          BOARD.disableMoveInput();
          tomitank.postMessage(`position fen ${GAME.fen()}`);
          tomitank.postMessage(`go depth ${ENGINE_DEPTH}`); // search depth
          // console.log('called bot');
        }
      } else {
        console.warn('Illegal move!', move);
      }
    }
  });
}

//
const botModeInputHandler = (event) => {
  console.log('event', event);
  event.chessboard.removeMarkers(undefined, MARKER_TYPE.dot);
  if (event.type === INPUT_EVENT_TYPE.moveStart) {
    const moves = GAME.moves({ square: event.square, verbose: true });
    for (const move of moves) {
      event.chessboard.addMarker(move.to, MARKER_TYPE.dot);
    }
    return moves.length > 0;
  } else if (event.type === INPUT_EVENT_TYPE.moveDone) {
    // mutate global state
    SQUARE_FROM = event.squareFrom;
    SQUARE_TO = event.squareTo;
    // human player's promotion
    const isWhiteAdvancing =
      GAME.turn() === 'w' &&
      event.squareFrom.slice(-1) === '7' &&
      event.squareTo.slice(-1) === '8';
    const isBlackAdvancing =
      GAME.turn() === 'b' &&
      event.squareFrom.slice(-1) === '2' &&
      event.squareTo.slice(-1) === '1';

    if (
      (isWhiteAdvancing || isBlackAdvancing) &&
      GAME.get(event.squareFrom).type === 'p' &&
      GAME.get(event.squareFrom).color === GAME.turn()
    ) {
      const modal = document.getElementById('promotion');
      modal.style.display = 'block';
      const whiteGroup = document.getElementById('promo-white');
      const blackGroup = document.getElementById('promo-black');
      if (GAME.turn() === 'w') {
        blackGroup.style.display = 'none';
      } else {
        whiteGroup.style.display = 'none';
      }
      // actual promotion should be handled in its own function
    }
    // not human player's promotion
    else {
      const move = { from: event.squareFrom, to: event.squareTo };
      const result = GAME.move(move);
      if (result) {
        // tomitank comments on last move
        GAME.undo();
        tomitank.postMessage(`position fen ${GAME.fen()}`);
        tomitank.postMessage(`go depth ${ENGINE_DEPTH}`); // search depth
        GAME.move(move);

        // const [lastMove] = GAME.history().slice(-1);
        // ws.send(lastMove);
        event.chessboard.disableMoveInput();
        event.chessboard.setPosition(GAME.fen());
        const possibleMoves = GAME.moves({ verbose: true });
        if (possibleMoves.length > 0) {
          // // random move
          // const randomIndex = Math.floor(Math.random() * possibleMoves.length);
          // const randomMove = possibleMoves[randomIndex];
          // GAME.move(randomMove);
          // event.chessboard.setPosition(GAME.fen());
          // event.chessboard.enableMoveInput(botModeInputHandler, COLOR.white);

          tomitank.postMessage(`position fen ${GAME.fen()}`);
          tomitank.postMessage(`go depth ${ENGINE_DEPTH}`); // search depth
        }
      } else {
        console.warn('Illegal move!', move);
      }
      return result;
    }
  }
};

const localModeInputHandler = (event) => {
  console.log('event', event);
  event.chessboard.removeMarkers(undefined, MARKER_TYPE.dot);
  if (event.type === INPUT_EVENT_TYPE.moveStart) {
    const moves = GAME.moves({ square: event.square, verbose: true });
    for (const move of moves) {
      event.chessboard.addMarker(move.to, MARKER_TYPE.dot);
    }
    return moves.length > 0;
  } else if (event.type === INPUT_EVENT_TYPE.moveDone) {
    // mutate global state
    SQUARE_FROM = event.squareFrom;
    SQUARE_TO = event.squareTo;
    // promotion
    const isWhiteAdvancing =
      GAME.turn() === 'w' &&
      SQUARE_FROM.slice(-1) === '7' &&
      SQUARE_TO.slice(-1) === '8';
    const isBlackAdvancing =
      GAME.turn() === 'b' &&
      SQUARE_FROM.slice(-1) === '2' &&
      SQUARE_TO.slice(-1) === '1';

    if (
      (isWhiteAdvancing || isBlackAdvancing) &&
      GAME.get(SQUARE_FROM).type === 'p' &&
      GAME.get(SQUARE_FROM).color === GAME.turn()
    ) {
      // show promotion modal
      promoModal.style.display = 'block';
      const whiteGroup = document.getElementById('promo-white');
      const blackGroup = document.getElementById('promo-black');
      if (GAME.turn() === 'w') {
        blackGroup.style.display = 'none';
      } else {
        whiteGroup.style.display = 'none';
      }
      // actual promotion is handled inside promo-piece click event
    }
    // not promotion
    else {
      const move = { from: SQUARE_FROM, to: SQUARE_TO };
      const result = GAME.move(move);
      if (result) {
        // const [lastMove] = GAME.history().slice(-1);
        // ws.send(lastMove);
        event.chessboard.setPosition(GAME.fen());
      } else {
        console.warn('Illegal move!', move);
      }
      return result;
    }
  }
};

// // WebSocket client
// let visitorId;
// let ws;
// function messageDom(msg) {
//   const div = document.createElement('li');
//   div.className = 'message';
//   div.innerText = msg;
//   return div;
// }
// const timeline = document.getElementById('timeline');
// const sendButton = document.getElementById('sendButton');
// sendButton.onclick = send;
// const closeButton = document.getElementById('closeButton');
// closeButton.onclick = close;
// const connectButton = document.getElementById('connectButton');
// connectButton.onclick = connect;
// // const status = document.getElementById('status');
// const input = document.getElementById('input');
// input.addEventListener('keydown', keyDownEvent);
// function send() {
//   const msg = input.value;
//   ws.send(msg);
//   applyState({ inputValue: '' });
// }
// function keyDownEvent(e) {
//   if (e.keyCode === 13) return send();
// }
// function connect() {
//   if (ws) ws.close();
//   ws = new WebSocket(`ws://${location.host}/ws`);
//   ws.addEventListener('open', () => {
//     console.log('open', ws);
//     ws.send(visitorId);
//     applyState({ connected: true });
//   });
//   ws.addEventListener('message', ({ data }) => {
//     timeline.appendChild(messageDom(data));

//     const result = GAME.move(data);

//     if (result) {
//       console.log(result);
//       BOARD.disableMoveInput();
//       BOARD.setPosition(GAME.fen());
//       const possibleMoves = GAME.moves({ verbose: true });
//       if (possibleMoves.length > 0) {
//         const randomIndex = Math.floor(Math.random() * possibleMoves.length);
//         const randomMove = possibleMoves[randomIndex];
//         setTimeout(() => {
//           // smoother with 500ms delay
//           GAME.move({ from: randomMove.from, to: randomMove.to });
//           BOARD.enableMoveInput(inputHandler, COLOR.white);
//           BOARD.setPosition(GAME.fen());
//         }, 500);
//       }
//     }
//   });
//   ws.addEventListener('close', () => {
//     applyState({ connect: false });
//   });
// }
// function close() {
//   ws.close();
//   applyState({ connected: false });
// }
// function applyState({ connected, status, inputValue }) {
//   if (inputValue != null) {
//     input.value = inputValue;
//   }
//   if (status != null) {
//     status.innerText = status;
//   }
//   if (connected != null) {
//     if (connected) {
//       sendButton.disabled = false;
//       connectButton.disabled = true;
//       closeButton.disabled = false;
//     } else {
//       sendButton.disabled = true;
//       connectButton.disabled = false;
//       closeButton.disabled = true;
//     }
//   }
// }
// connect();

// import FingerprintJS from 'https://cdn.skypack.dev/@fingerprintjs/fingerprintjs';

// function initFingerprintJS() {
//   // Initialize an agent at application startup.
//   const fpPromise = FingerprintJS.load();

//   // Get the visitor identifier when you need it.
//   fpPromise
//     .then((fp) => fp.get())
//     .then((result) => {
//       // This is the visitor identifier:
//       visitorId = result.visitorId;
//       console.log(visitorId);
//     });
// }
// initFingerprintJS();
