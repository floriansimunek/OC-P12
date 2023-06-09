import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./UserInformations.module.scss";

/* COMPONENTS */
import Hello from "@components/Hello";
import CardsList from "@components/CardsList";
import PieChart from "@components/Charts/Pie";
import BarChart from "@components/Charts/Bar";
import LineChart from "@components/Charts/Line";
import RadarChart from "@components/Charts/Radar";

/* API */
import UserService from "../../services/UserService";

export default function UserInformations() {
	const { id: userID } = useParams();
	const [userData, setUserData] = useState(null);
	const [userDataActivity, setUserDataActivity] = useState(null);
	const [userAverageSessions, setUserAverageSessions] = useState(null);
	const [userPerformance, setUserPerformance] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const [userData, userActivity, userAverageSessions, userPerformance] = await Promise.all([
					UserService.getUserData(userID),
					UserService.getUserActivity(userID),
					UserService.getUserAverageSessions(userID),
					UserService.getUserPerformance(userID),
				]);
				setUserData(userData);
				setUserDataActivity(userActivity);
				setUserAverageSessions(userAverageSessions);
				setUserPerformance(userPerformance);
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, [userID]);

	return (
		<>
			{userData && (
				<>
					<Hello userData={userData} />
					<div className={styles.datas}>
						<div className={styles.left}>
							<div className={styles.top}>
								<BarChart userDataActivity={userDataActivity} />
							</div>
							<div className={styles.bot}>
								<LineChart userAverageSessions={userAverageSessions} />
								<RadarChart userPerformance={userPerformance} />
								<PieChart score={userData.score} />
							</div>
						</div>
						<div className={styles.right}>
							<CardsList
								cards={[
									{
										type: "energy",
										number: userData.calorieCount,
										unity: "kCal",
										name: "Calories",
										color: "#ff0000",
									},
									{
										type: "chicken",
										number: userData.proteinCount,
										unity: "g",
										name: "Proteines",
										color: "#4ab8ff",
									},
									{
										type: "apple",
										number: userData.carbohydrateCount,
										unity: "g",
										name: "Glucides",
										color: "#fdcc0c",
									},
									{
										type: "cheeseburger",
										number: userData.lipidCount,
										unity: "g",
										name: "Lipides",
										color: "#fd5181",
									},
								]}
							/>
						</div>
					</div>
				</>
			)}
		</>
	);
}
