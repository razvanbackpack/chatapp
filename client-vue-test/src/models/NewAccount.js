import Notification from './Notification';
export default class NewAccount {

	username;
	email;
	password;
	passwordRepeat;
	notifications;

	constructor(username, email, password, passwordRepeat) {
		this.username = username;
		this.email = email;
		this.password = password;
		this.passwordRepeat = passwordRepeat;
	}


	validate() {
		if (this.username.length < 5) 
		{
			new Notification('Username error', Notification.Types.Error);
			return false;
		}

		return true;
    }
}