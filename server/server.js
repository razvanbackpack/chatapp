// Includes
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
	userJoin,
	getCurrentUser,
	userLeaves,
	getRoomUsers
} = require('./utils/users');


// Settings
const app = express();
const server = http.createServer(app);
const io = socketio(server,{
	cors: {
	  origin: '*',
	}
  });

const PORT = 3000 || process.env.PORT;

// Run when a client connects
io.on('connection', (socket) => {
	socket.on('joinRoom', ({ username, room }) => {
		const user = userJoin(socket.id, username, room);
		console.log(`${username} joined ${room}`);
		socket.join(user.room);

		// Welcome current user
		socket.emit('message', formatMessage('', 'Welcome to Chatapp!'));

		// Broadcast to everyone except current user
		socket.broadcast
			.to(user.room)
			.emit('message', formatMessage('', `${username} has joined the chat!`));

		io.to(user.room).emit('roomInfo', {
			room: room,
			users: getRoomUsers(room),
		});
	});

	// Listen for chatMessage
	socket.on('chatMessage', (message) => {
		const user = getCurrentUser(socket.id);

		io.to(user.room)
			.emit('message', formatMessage(user.username, message));
	});

	// Runs when client disconnects
	socket.on('disconnect', () => {
		const user = userLeaves(socket.id);

		if (user) {
			io.to(user.room)
				.emit('message', formatMessage('', `${user.username} has left the chat`));

			io.to(user.room).emit('roomInfo', {
				room: user.room,
				users: getRoomUsers(user.room),
			});
		}
	});
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

server.listen(PORT,  () => {
	console.log(`Server running on PORT: ${PORT}`);
});