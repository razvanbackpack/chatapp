<script setup>
import Navigation from "./components/NavigationComponent.vue";
import { RouterView } from "vue-router";
import { useStore } from 'vuex'

</script>

<script>
import EventBus from "./common/EventBus";

export default {
	data() {
		{
			return {
				isUserLoggedIn: false,
			}
		}
	},

	mounted() { 
		EventBus.on("logout", () => {
			this.logOut();
		});

		EventBus.on("testEvent", () => {
			
		});

	},
 

	beforeUnmount() {
		EventBus.dispatch("logout");
	},

	methods: {
		logOut() {
			this.$store.dispatch('auth/logout');
			this.$router.push('/');
		}
	},
	
}
</script>

<template>
	<div class = "m-0 p-0">
		<Navigation />
		<div class="mx-auto mt-20 w-5/6" v-if = "this.$route.name != 'chat'">
			<RouterView />
		</div>
		<div class="mt-16"  v-if = "this.$route.name == 'chat'">
			<RouterView />
		</div>
		<notifications classes="toast-notification"/>
	</div>
</template>

