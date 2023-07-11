import Service from "./Service";
import MockedService from "./MockedService";
import User from "@entities/User";
import UserSessionsCollection from "@entities/UserSessionsCollection";
import UserAverageSessionsCollection from "@entities/UserAverageSessionsCollection";
import UserPerformancesCollection from "@entities/UserPerformancesCollection";

/**
 * UserService
 * @extends {Service|MockedService}
 */
export default class UserService extends MockedService {
	static baseUrl = "http://localhost:1234/user";

	/**
	 * getUserData()
	 * @param {number} userId id of the user
	 * @returns user datas
	 */
	static async getUserData(userId) {
		const data = await this.fetchData(`/${userId}`);
		const user = new User(data);
		return user;
	}

	/**
	 * getUserActivity()
	 * @param {number} userId  id of the user
	 * @returns user activities datas
	 */
	static async getUserActivity(userId) {
		const data = await this.fetchData(`/${userId}/activity`);
		const activities = new UserSessionsCollection(data);
		return activities;
	}

	/**
	 * getUserAverageSessions()
	 * @param {number} userId id of the user
	 * @returns user average sessions datas
	 */
	static async getUserAverageSessions(userId) {
		const data = await this.fetchData(`/${userId}/average-sessions`);
		const averageSessions = new UserAverageSessionsCollection(data);
		return averageSessions;
	}

	/**
	 * getUserPerformance()
	 * @param {number} userId id of the user
	 * @returns user performances datas
	 */
	static async getUserPerformance(userId) {
		const data = await this.fetchData(`/${userId}/performance`);
		const performances = new UserPerformancesCollection(data);
		return performances;
	}
}
