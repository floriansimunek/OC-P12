import styles from "./MenuItem.module.scss";
import { Link } from "react-router-dom";

export default function MenuItem({ icon }) {
	console.log("icon", icon);
	return (
		<Link to="#" className={styles.nav_item_link}>
			<img src={icon} alt="Menu Icon" className={styles.icon} />
		</Link>
	);
}
