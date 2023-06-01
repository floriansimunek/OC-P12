import styles from "./Menu.module.scss";
import MenuItem from "../MenuItem";

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
		</aside>
	);
}
