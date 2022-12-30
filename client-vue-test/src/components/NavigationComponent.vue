<script setup>
import { RouterLink } from "vue-router";
import api from "../services/api";
import EventBus from "../common/EventBus";
</script>


<template>
	<div class="bg-slate-700">
		<nav class="fixed w-full bottom-auto top-0">
			<div class="bg-gray-900">
				<div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
					<div class="relative flex items-center justify-between">
						<div class="flex items-center"><a class="inline-flex items-center mr-8" href="#"><span
									class="text-2xl text-white"></span><span
									class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase hidden md:block"></span></a>
							<ul class="flex items-center space-x-8">
								<li class="" v-if="!this.loggedIn">
									<RouterLink to="/"
										class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
										href="#">
										Home
									</RouterLink>
								</li>
								<li class="" v-if="!this.loggedIn">
									<RouterLink to="/about"
										class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
										href="#">
										About
									</RouterLink>
								</li>
								<li class="" v-if="this.loggedIn">
									<RouterLink to="/chat"
										class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
										href="#">
										Chat
									</RouterLink>
								</li>

								<li class="" v-if="this.loggedIn">
									<RouterLink to="/profile"
										class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
										href="#">
										Profile
									</RouterLink>
								</li>
								<li class="" v-if="this.loggedIn">
									<a href="#" @click="logout">Logout</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	mounted: function () {

	},
	methods: {
		logout() {
			api.get("/auth/logout", {}).then((response) => {

				if (response.data['disconnect'] == 'true') EventBus.dispatch("logout");
				this.$router.push('/');
				/**
				 * error => {
						this.content =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();

						if (error.response && error.response.status === 403) {
						EventBus.dispatch("logout");
						}
					} 
				*/
			});

		}
	},
	computed: {
		loggedIn() {
			return this.$store.state.auth.status.loggedIn;
		},
	},
}
</script>