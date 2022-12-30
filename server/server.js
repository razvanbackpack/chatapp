// ! ========= INCLUDES ========= 
// #region
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
var mysql = require ("mysql");
// #endregion

// ! ========= OTHER IMPORTS ========= 
// #region
const routes = require('./routes/routes');
// #endregion

// ! ========= UTILS ========= 
// #region
const formatMessage = require('./utils/messages');
const {
	userJoin,
	getCurrentUser,
	userLeaves,
	getRoomUsers
} = require('./utils/users');
// #endregion

// ! ========= SETTINGS ========= 
// #region
const app = express();
const server = http.createServer(app);
const io = socketio(server,{
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
		allowedHeaders: ["CAPP_ID_STRING"],
		credentials: true
	  }
  });

const PORT = 3000 || process.env.PORT;
// #endregion

// ! ========= CLIENT CONNECTED ========= 
// #region
io.on('connection', (socket) => {
	socket.emit('message', formatMessage('', 'Welcome to Chatapp!'));
	
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
// #endregion


// ! ========= APP.USE STUFF ========= 
// #region
// * Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// ! THIS MUST BE BEFORE app.use('/api', routes);
// CORS SETTINGS
var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));

// ! THIS MUST BE AFTER THE app.use(cors(corsOptions));
app.use('/api', routes);
// #endregion

server.listen(PORT,  () => {
	// DatabaseManager.getUsers();
	console.log(`Server running on PORT: ${PORT}`);
});