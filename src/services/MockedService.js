import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../mocks/UsersData";

export default class MockedService {
	static async fetchData(path) {
		const endPath = path.split("/");

		switch (endPath[2]) {
			case "activity":
				return USER_ACTIVITY;
			case "average-sessions":
				return USER_AVERAGE_SESSIONS;
			case "performance":
				return USER_PERFORMANCE;
			default:
				return USER_MAIN_DATA;
		}
	}
}
