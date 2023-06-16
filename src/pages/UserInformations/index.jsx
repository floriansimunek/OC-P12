import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* COMPONENTS */
import Hello from "../../components/Hello";

/* API */
import Api from "../../utils/Api";

const API = new Api();

export default function UserInformations() {
	const { id: userID } = useParams();
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const userData = await API.getUserData(userID);
				setUserData(userData);
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, [userID]);

	return <div>{userData && <Hello userData={userData} />}</div>;
}
