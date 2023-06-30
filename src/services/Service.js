export default class Service {
	static baseUrl = "";

	static async fetchData(path) {
		const response = await fetch(`${this.baseUrl}${path}`);
		const data = await response.json();
		return data.data;
	}
}
