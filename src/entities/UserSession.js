export default class UserSession {
	day;
	kilogram;
	calories;
	userId;

	constructor(sessionData) {
		this.day = new Date(sessionData.day);
		this.kilogram = sessionData.kilogram;
		this.calories = sessionData.calories;
		this.userId = sessionData.userId;
	}
}
