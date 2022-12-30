import { useNotification } from "@kyvg/vue3-notification";

const notification = useNotification()

export default class Notification {
	text;
	type;
	title;

	static Types = {
		General: 'general',
		Error: 'error',
		Warning: 'warn',
		Success: 'success',
	};

	constructor(text, type, title = false) {
		this.text = text;
		this.type = type;
		this.title = title;

		this.fireItUp();
	}

	fireItUp()
	{
		notification.notify({
			title: this.title ? this.title : '',
			text: this.text,
			type: this.type,
			duration: 1500,
		});
	}
}