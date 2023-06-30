export default class UserAverageSession {
	day;
	dayOfWeek;
	sessionLength;
	userId;

	constructor(averageSessionData) {
		this.day = averageSessionData.day;
		this.dayOfWeek = averageSessionData.dayOfWeek;
		this.sessionLength = averageSessionData.sessionLength;
		this.userId = averageSessionData.userId;
	}
}
