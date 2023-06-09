import UserAverageSession from "./UserAverageSession";

/**
 * Collection of UserAverageSession
 */
export default class UserAverageSessionsCollection {
	averageSessions = [];
	userId = null;

	/**
	 *
	 * @param {object} averageSessionData user average session data
	 */
	constructor(averageSessionData) {
		this.userId = averageSessionData.userId;
		this.averageSessions = this.parseData(averageSessionData);
	}

	/**
	 *
	 * @param {object} data get user average sessions data
	 * @returns {object} parsedData of the user average sessions data
	 */
	parseData(data) {
		const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
		const parsedData = data.sessions.map((session, k) => new UserAverageSession({ ...session, dayOfWeek: daysOfWeek[k], userId: this.userId }));
		const [monday, tuesday, , , , saturday, sunday] = parsedData;

		parsedData.unshift(
			new UserAverageSession({
				day: null,
				sessionLength: monday.sessionLength + (tuesday.sessionLength - monday.sessionLength) / 2,
				dayOfWeek: null,
				userId: this.userId,
			})
		);
		parsedData.push(
			new UserAverageSession({
				day: null,
				sessionLength: saturday.sessionLength + (sunday.sessionLength - saturday.sessionLength) / 2,
				dayOfWeek: null,
				userId: this.userId,
			})
		);

		return parsedData;
	}
}
