import Service from "./Service";
import MockedService from "./MockedService";
import User from "../entities/User";
import UserSessionsCollection from "../entities/UserSessionsCollection";
import UserAverageSessionsCollection from "../entities/UserAverageSessionsCollection";
import UserPerformancesCollection from "../entities/UserPerformancesCollection";

export default class UserService extends MockedService {
	static baseUrl = "http://localhost:1234/user";

	static async getUserData(userId) {
		const data = await this.fetchData(`/${userId}`);
		const user = new User(data);
		return user;
	}

	static async getUserActivity(userId) {
		const data = await this.fetchData(`/${userId}/activity`);
		const activities = new UserSessionsCollection(data);
		return activities;
	}

	static async getUserAverageSessions(userId) {
		const data = await this.fetchData(`/${userId}/average-sessions`);
		const averageSessions = new UserAverageSessionsCollection(data);
		return averageSessions;
	}

	static async getUserPerformance(userId) {
		const data = await this.fetchData(`/${userId}/performance`);
		const performances = new UserPerformancesCollection(data);
		return performances;
	}
}
