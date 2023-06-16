import Service from "./Service";

export default class UserService extends Service {
	static baseUrl = "http://localhost:1234/user";

	static async getUserData(userId) {
		const data = await this.fetchData(`/${userId}`);
		return data;
	}

	static async getUserActivity(userId) {
		const data = await this.fetchData(`/${userId}/activity`);
		return data;
	}

	static async getUserAverageSessions(userId) {
		const data = await this.fetchData(`/${userId}/average-sessions`);
		return data;
	}

	static async getUserPerformance(userId) {
		const data = await this.fetchData(`/${userId}/performance`);
		return data;
	}
}
