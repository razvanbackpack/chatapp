<script setup>
import 'remixicon/fonts/remixicon.css';

import Login from './LoginComponent.vue';
import Register from './RegisterComponent.vue';

import Language from "../../config/language";

</script>


<template>
	<div class="grid grid-cols-1 md:grid-cols-6 gap-0 md:gap-8 justify-items-center sm:justify-items-start">
		<div class="order-2 col-span-4 md:order-1">
			<h1 class="mb-5 font-bold text-2xl">Lorem ipsum</h1>
			<p class = "text-justify">
				Lorem ipsum dolor sit amet
				consectetur adipiscing elit. Etiam a magna eu ipsum finibus semper. Vestibulum sed odio a ex pulvinar
				volutpat. Integer tristique nisi quis ante tempor
				eu dapibus felis maximus. Duis sit amet sodales leo
				eu aliquam augue. Proin malesuada dignissim dui in consectetur. Cras eu enim quis sapien porttitor
				pulvinar
				sed eu metus. Fusce dapibus pharetra mattis. Donec ullamcorper rutrum eros
				vel condimentum sapien faucibus vitae. Nunc a dui eu leo euismod scelerisque sed ut ante. Mauris
				vestibulum
				libero a magna sollicitudin varius.
				<br /> <br />
				Praesent et maximus odio
				a eleifend mauris. Morbi faucibus quam in leo iaculis ultrices. Etiam non accumsan lacus
				ac rutrum augue. Ut vel libero sit amet nisi euismod dapibus. Praesent vitae lacus non turpis
				consectetur
				aliquam sed quis urna. Suspendisse rhoncus mi quis rutrum volutpat. Nullam arcu justo
				ultrices a massa vel
				blandit gravida metus. Donec commodo a tellus id interdum. Sed commodo dolor quis mauris bibendum
				ornare.
				Fusce lacus nibh
				cursus ut massa at
				fringilla sollicitudin nulla. Vestibulum dignissim lobortis cursus.
				<br /> <br />
				Phasellus fermentum urna sapien
				sit amet mattis orci vulputate eget. Donec porta id lacus id dapibus. Ut fermentum nibh vitae arcu
				consequat
				ornare. Aliquam sit amet ex non mauris volutpat euismod. Aenean ut elit dictum
				aliquet nulla in
				luctus ipsum. Etiam vehicula
				tellus rhoncus maximus scelerisque
				est ante consequat odio
				vel bibendum dui justo id elit. Donec et volutpat felis. Nunc pellentesque est a pharetra volutpat. In
				iaculis magna et arcu interdum
				at aliquam ligula lacinia. Praesent vehicula rhoncus magna at sagittis. Pellentesque turpis dui
				efficitur ut ex eu
				interdum convallis quam. Lorem ipsum dolor sit amet
				consectetur adipiscing elit. Curabitur mattis posuere nisi
				vel consequat felis ornare et. Sed in elit tellus.
			</p>
		</div>
		<div class="order-1 col-span-2 w-full md:order-2">
			<Login id = "login"/>
			<Register id = "register"/>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        {
            return {
                loggedIn : false,
            }
        }
    },

    created() {	
    },

	updated(){
	},
    methods: {
		isUserLogged() {

		},
    }
}
</script>

