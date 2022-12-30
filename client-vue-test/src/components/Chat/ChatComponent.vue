<script setup>
import 'remixicon/fonts/remixicon.css';

import ClientSocket from '../../common/ClientSocket';
</script>


<template>
    <div class="flex h-screen">
		<div class="chat-header hidden md:block">
			<div class ="bg-yellow-100 h-10 pt-2 pl-2">
				<i class="ri-chat-2-line"></i> Chatapp
			</div>
			<button id="leave-btn" class="w-full bottom-12 px-6 py-2.5 bg-yellow-90 text-white font-medium text-xs leading-tight
			uppercase shadow-md hover:bg-gray-50 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg 
			focus:outline-none focus:ring-0 active:bg-gray-100 active:shadow-lg transition duration-150 ease-in-out">
			LEAVE</button>	
			<div class="chat-sidebar">
				<div class ="text-gray-50 pl-2 mt-2" > <i class="ri-edit-line"></i> ROOM </div>
				<div class ="text-gray-50 pl-9 mb-10" id="room-name"></div>

				<div class ="text-gray-50 pl-2"> <i class="fas fa-users"></i> USERS </div>
				<ul class ="text-gray-50 pl-3" id="users"></ul>
			</div>
	
		</div>
		<div class="w-full md:w-3/4 bg-black-90">
			<div class="w-full overflow-auto h-screen pb-20" id = "chat-messages">
				
				
			</div>
			<div class="mt-10 chat-form-container absolute inset-x-0 bottom-0">
				<form id="chat-form" class = "flex">
					<input id="msg" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
					 bg-black-90 bg-clip-padding border-t border-b border-solid transition ease-in-out
					  m-0 focus:text-gray-50 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="text" placeholder="Enter Message" required autocomplete="off" />
					<button class="inline-block px-6 py-2.5 bg-yellow-100 text-white font-medium text-xs leading-tight
					uppercase shadow-md hover:bg-yellow-90 hover:shadow-lg focus:bg-yellow-100 focus:shadow-lg 
					focus:outline-none focus:ring-0 active:bg-yellow-100 active:shadow-lg transition duration-150 ease-in-out"
					type = "submit">
					<i class="fas fa-paper-plane"></i> Send</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    mounted: function () {
        ClientSocket.on('message', (message) => {
            console.log(message);
        });
    },
    methods: {

    },
}
</script>
<style scoped>

</style>
