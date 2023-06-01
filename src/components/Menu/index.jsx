import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

export default function Menu() {
	return (
		<aside className={styles.menu}>
			<ul className={styles.nav}>
				<li className={styles.nav_item}>
					<Link to="#" className={styles.nav_item_link}></Link>
				</li>
				<li className={styles.nav_item}>
					<Link to="#" className={styles.nav_item_link}></Link>
				</li>
				<li className={styles.nav_item}>
					<Link to="#" className={styles.nav_item_link}></Link>
				</li>
				<li className={styles.nav_item}>
					<Link to="#" className={styles.nav_item_link}></Link>
				</li>
			</ul>
		</aside>
	);
}
