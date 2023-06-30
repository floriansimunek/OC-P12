import UserPerformance from "./UserPerformance";

export default class UserPerformancesCollection {
	performances = [];
	userId = null;

	constructor(performancesData) {
		this.userId = performancesData.userId;
		this.performances = this.parsedData(performancesData);
	}

	parsedData(data) {
		const kind = {
			0: "Cardio",
			1: "Energie",
			2: "Endurance",
			3: "Force",
			4: "Vitesse",
			5: "Intensité",
		};

		const parsedData = data.data.map((performance, k) => new UserPerformance({ ...performance, kind: kind[k], userId: this.userId }));

		return parsedData.reverse();
	}
}
