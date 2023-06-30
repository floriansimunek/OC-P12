export default class User {
	id;

	firstName;
	lastName;
	age;

	score;

	calorieCount;
	proteinCount;
	carbohydrateCount;
	lipidCount;

	constructor(userData) {
		this.id = userData.id;

		this.firstName = userData.userInfos.firstName;
		this.lastName = userData.userInfos.lastName;
		this.age = userData.userInfos.age;

		this.score = userData.score ?? userData.todayScore;

		this.calorieCount = userData.keyData.calorieCount;
		this.proteinCount = userData.keyData.proteinCount;
		this.carbohydrateCount = userData.keyData.carbohydrateCount;
		this.lipidCount = userData.keyData.lipidCount;
	}
}
