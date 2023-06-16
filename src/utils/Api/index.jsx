export default class Api {
	constructor() {
		this.baseUrl = "http://localhost:1234";
	}

	async getUserData(userId) {
		const url = `${this.baseUrl}/user/${userId}`;
		const response = await fetch(url);
		const data = await response.json();
		return data.data;
	}

	async getUserActivity(userId) {
		const url = `${this.baseUrl}/user/${userId}/activity`;
		const response = await fetch(url);
		const data = await response.json();
		return data.data;
	}

	async getUserAverageSessions(userId) {
		const url = `${this.baseUrl}/user/${userId}/average-sessions`;
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}

	async getUserPerformance(userId) {
		const url = `${this.baseUrl}/user/${userId}/performance`;
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}
}
