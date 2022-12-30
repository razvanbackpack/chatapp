/**
 * This is our path between our User functionality (services/user.service.js) 
 * and the rest of our app.
 */

import UserService from '../services/user.service';
import TokenService from '../services/token.service';

export const user = {
	namespaced: true,
	actions: {
		getData({ commit }) {
			let accessToken = TokenService.getToken();
		
			return UserService.getUserDetails(accessToken).then(
				response => {
					commit('getUserDetailsSuccess');
					return Promise.resolve(response.data);
				},
				error => {
					return Promise.resolve(error.data);
				}
			);
		},
		refreshTest({commit}) {
			let accessToken = TokenService.getToken();
			
			return UserService.refreshTest(accessToken).then(
				response => {
					commit('refreshTestSuccess');
					return Promise.resolve(response.data);
				},
				error => {
					return Promise.resolve(error.data);
				}
			)
		}
	},
	mutations: {
		getUserDetailsSuccess(state) {
			console.log('got user details');
			
		},

		refreshTestSuccess(state) {
			console.log('refresh good');
		}
	}
};