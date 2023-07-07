import styles from "./MenuItem.module.scss";
import { Link } from "react-router-dom";

/**
 *
 * @param {String} icon Icon src location
 * @returns {JSX.Element} Menu Item Link Element
 */
export default function MenuItem({ icon }) {
	return (
		<Link to="#" className={styles.nav_item_link}>
			<img src={icon} alt="Menu Icon" className={styles.icon} />
		</Link>
	);
}
