
// IMPORTS
import DisplayInfo from "../public/js/utils/Display";

// DECLARATIONS
const chatForm = $('#chat-form');
const chatMessages = $('#chat-messages');
const roomName = $('#room-name');
const userList = $('#users');

const Output = new DisplayInfo(chatMessages, userList, roomName);


// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
	ignoreQueryPrefix: true,
});

const socket = io("http://localhost:3000");

// Join chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomInfo', ({ room, users }) => {
	Output.roomInfo(room);
	Output.users(users);
});

// Message from server
socket.on('message', (message) => {
	Output.message(message);

	// Scroll down

	// chatMessages.scrollTop = chatMessages.scrollHeight;
	chatMessages.scrollTop(chatMessages[0].scrollHeight);
});

// Message submit
chatForm.submit((e) => {
	e.preventDefault();

	// Get message text
	let msg = e.target.elements.msg.value;

	msg = msg.trim();

	if (!msg) {
		return false;
	}

	// Emit message to server
	socket.emit('chatMessage', msg);

	// Clear input
	e.target.elements.msg.value = '';
	e.target.elements.msg.focus();
}); 


//Prompt the user before leave chat room
$('#leave-btn').click( () => {
	const leaveRoom = confirm('Confirm LEAVE action');
	if (leaveRoom) {
		window.location = '../index.html';
	} 
})


