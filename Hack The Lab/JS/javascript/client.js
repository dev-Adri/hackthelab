const socket = io.connect('192.168.1.15:3000');
const message_form = document.getElementById('sendcontainer');
const message_input = document.getElementById('messageinput');
const message_container = document.getElementById('messagecontainer');

const name = prompt("What is your name: ");
appendmessage('You joined the chat!')
socket.emit('new-user', name);

socket.on('chat-message', data => {
    appendmessage(`${data.name}: ${data.message}`);
});

socket.on('user-connected', name => {
    appendmessage(`${name} connected`);
});

socket.on('user-disconnected', name => {
    appendmessage(`${name} disconnected`);
});

message_form.addEventListener('submit', e => {
    e.preventDefault();
    const message = message_input.value;
    appendmessage(`You: ${message}`);
    socket.emit('send-chat-message', message);
    message_input.value = '';
});

function appendmessage(message) {
    const messageelement = document.createElement('div');
    messageelement.innerText = message;
    message_container.append(messageelement);
}