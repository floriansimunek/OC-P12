export default class UserPerformance {
	kind;
	value;
	userId;

	constructor(performancesData) {
		this.kind = performancesData.kind;
		this.value = performancesData.value;
		this.userId = performancesData.userId;
	}
}
