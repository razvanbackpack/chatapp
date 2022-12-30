/** 
 * This file describes the functionality that is used for Authentication
 */

import api from "./api";
import TokenService from "./token.service";
import Notification from "../models/Notification";
import Language from "../config/language";
class AuthService {
	login({ username, password }) {
		return api
			.post("/auth/login", {
				username,
				password
			})
			.then((response) => {
				if (response.data.accessToken) {
					TokenService.setToken({accessToken: response.data.accessToken});
				}

				return response.data;
			});
	}

	logout() {
		TokenService.removeToken();
	}

	register({ username, email, password }) {
		return api.post("/auth/signup", {
			username,
			email,
			password
		});
	}
}

export default new AuthService();