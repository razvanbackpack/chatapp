
export default class {
    chatMessages;
    userList;
    roomName;

    constructor(cm, ul, rn){
        this.chatMessages = cm;
        this.userList = ul;
        this.roomName = rn;
    }
	message(message){
		let messageTemplate = `<div class="message border-dotted border-b-2 border-sky-500 m-5 p-5">
		<p class="meta text-yellow-100">
			${message.username} <span class="text-gray-0"> ${message.time} </span>
		</p>
		<p class="text text-gray-0"> ${message.text} </p>
		</div>`;
	
		this.chatMessages.append(messageTemplate);
	}

	users(users){
		this.userList.html('');
		users.forEach((user) => {
			this.userList.append(
				`<li><i class="ri-user-line"></i> ${user.username}</li>`
			)
		})
	}

	roomInfo(roomInfo){
		this.roomName.html(roomInfo);
	}
}