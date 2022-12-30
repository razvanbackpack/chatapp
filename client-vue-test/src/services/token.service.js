/** 
 * This file describes the functionality that is used for the User
 */

class TokenService {
	key = 'TBBUserTokenKeyValue';

	// TOKEN FUNCTIONS
	setToken(token) {
		localStorage.setItem(import.meta.env.VITE_TOKEN_STORAGE_KEY, JSON.stringify(token));
	}

	removeToken(){
		localStorage.removeItem(import.meta.env.VITE_TOKEN_STORAGE_KEY);
	}

	getToken() {
		const token = JSON.parse(localStorage.getItem(import.meta.env.VITE_TOKEN_STORAGE_KEY))
		return token?.accessToken;
	}

	// USER FUNCTIONS
	setUser(user) {
		localStorage.setItem(import.meta.env.VITE_USER_STORAGE_KEY, JSON.stringify(user));
	}
	
	getUser() {
		return JSON.parse(localStorage.getItem(import.meta.env.VITE_USER_STORAGE_KEY));
	}

	removeUser() {
		localStorage.removeItem(import.meta.env.VITE_USER_STORAGE_KEY);
	}
}

export default new TokenService();