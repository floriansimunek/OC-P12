import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./UserInformations.module.scss";

/* COMPONENTS */
import Hello from "../../components/Hello";
import CardsList from "../../components/CardsList";
import PieChart from "../../components/Charts/Pie";
import BarChart from "../../components/Charts/Bar";
import LineChart from "../../components/Charts/Line";

/* API */
import Api from "../../utils/Api";

const API = new Api();

export default function UserInformations() {
	const { id: userID } = useParams();
	const [userData, setUserData] = useState(null);
	const [userDataActivity, setUserDataActivity] = useState(null);
	const [userAverageSessions, setUserAverageSessions] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const userData = await API.getUserData(userID);
				const userActivity = await API.getUserActivity(userID);
				const userAverageSessions = await API.getUserAverageSessions(userID);
				setUserData(userData);
				setUserDataActivity(userActivity);
				console.log(userAverageSessions);
				setUserAverageSessions(userAverageSessions);
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, [userID]);

	return (
		<>
			{userData && (
				<div>
					<Hello userData={userData} />
					<div className={styles.datas}>
						<CardsList
							cards={[
								{
									type: "energy",
									number: userData.keyData.calorieCount,
									unity: "kCal",
									name: "Calories",
									color: "#ff0000",
								},
								{
									type: "chicken",
									number: userData.keyData.proteinCount,
									unity: "g",
									name: "Proteines",
									color: "#4ab8ff",
								},
								{
									type: "apple",
									number: userData.keyData.carbohydrateCount,
									unity: "g",
									name: "Glucides",
									color: "#fdcc0c",
								},
								{
									type: "cheeseburger",
									number: userData.keyData.lipidCount,
									unity: "g",
									name: "Lipides",
									color: "#fd5181",
								},
							]}
						/>
						<PieChart score={userData.todayScore || userData.score} />
						<BarChart userDataActivity={userDataActivity} />
						<LineChart userAverageSessions={userAverageSessions} />
					</div>
				</div>
			)}
		</>
	);
}
