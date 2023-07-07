import styles from "./Menu.module.scss";
import MenuItem from "../MenuItem";

/**
 * Menu
 * @param {Object} icons Object of left menu icons
 * @returns
 */
export default function Menu({ icons }) {
	return (
		<aside className={styles.menu}>
			<ul className={styles.nav}>
				{icons.map((icon, k) => (
					<li className={styles.nav_item} key={k}>
						<MenuItem icon={icon} />
					</li>
				))}
			</ul>
			<p className={styles.copyright}>Copyright, SportSee 2020</p>
		</aside>
	);
}
