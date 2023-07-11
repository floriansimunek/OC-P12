import UserSession from "./UserSession";

/**
 * Collection of UserSession
 */
export default class UserSessionsCollection {
	sessions = [];
	userId = null;

	/**
	 *
	 * @param {object} sessionsData user sessions data
	 */
	constructor(sessionsData) {
		this.userId = sessionsData.userId;
		this.sessions = sessionsData.sessions.map((session) => new UserSession({ ...session, userId: this.userId }));
	}
}
