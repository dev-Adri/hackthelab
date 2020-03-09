const fs = require('fs');
const express = require('express');
const app = require('express')();           
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(express.static(__dirname + '/public'));

const users = {};

app.get('/', function(req, res) {
    res.sendFile('C:/Users/User/Desktop/Hack The Lab/JS/html/class.html');
});

io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit('user-connected', name);
    });
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', {message: message, name: users[socket.id]});
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id]);
        delete users[socket.id]
    });

    socket.on('mousecord', mousec);

    socket.on('clearcanvas', function() {
        socket.broadcast.emit('clearcanvas', '');
    });

    function mousec(data) {
        socket.broadcast.emit('mousecords', data);
    }
});

http.listen(process.env.PORT || 3000, '0.0.0.0', function() {
	console.log('Working...');
});