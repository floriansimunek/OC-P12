import UserSession from "./UserSession";

export default class UserSessionsCollection {
	sessions = [];
	userId = null;

	constructor(sessionsData) {
		this.userId = sessionsData.userId;
		this.sessions = sessionsData.sessions.map((session) => new UserSession({ ...session, userId: this.userId }));
	}
}
