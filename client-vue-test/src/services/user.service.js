/** 
 * This file describes the functionality that is used for the User
 */

import api from './api';


class UserService {
	getUserDetails(accessToken) {
		const params = new URLSearchParams([['accessToken', accessToken]]);
		return api.get('/users', {
			params
		});
	}

	refreshTest(accessToken) {
		const params = new URLSearchParams([['accessToken', accessToken]]);
		return api.post('/testPost', {
			params
		});
	}

	getUserBoard() {
		return api.get('/test/user');
	}

	getModeratorBoard() {
		return api.get('/test/mod');
	}

	getAdminBoard() {
		return api.get('/test/admin');
	}
}

export default new UserService();