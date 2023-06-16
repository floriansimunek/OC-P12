export default class Api {
	constructor() {
		this.ApiURL = "http://localhost:1234";
		this.userData = null;
		this.getUserData();
	}

	async getUserData() {
		const response = await fetch(this.ApiURL + "/user/12");
		const data = await response.json();
		console.log(data.data);
		this.userData = data.data;
	}
}
