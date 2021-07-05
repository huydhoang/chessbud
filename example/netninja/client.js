// new ws connection
const ws = new WebSocket('ws://localhost:8080/ws');

// dom refs
const formLogin = document.querySelector('.form-login');
const formMessage = document.querySelector('.form-message');
const messageBoard = document.querySelector('.message-board');
const messageList = document.querySelector('.message-list');

let username = 'guest';

// enter chat with name
formLogin.addEventListener('submit', (ev) => {
  ev.preventDefault();

  username = formLogin.username.value;

  ws.send(JSON.stringify({ event: 'join', username }));

  formLogin.classList.add('hidden');
  messageBoard.classList.remove('hidden');
});

// send chat message
formMessage.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const message = formMessage.message.value;

  ws.send(JSON.stringify({ username, message }));

  formMessage.message.value = '';
});

// display events
const messageParser = (ev) => {
  // console.log(ev.data);

  const { username, message } = JSON.parse(ev.data);
  const template = `
    <li>
      <div class="username">${username}</div>
      <div class="message">${message}</div>
    </li>
  `;
  messageList.innerHTML += template;
};

// setup listener
ws.addEventListener('message', messageParser);
