import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<div className={styles.main}>
			<Link to="/user/12" className={styles.button}>
				User 12
			</Link>
			<Link to="/user/18" className={styles.button}>
				User 18
			</Link>
		</div>
	);
}
