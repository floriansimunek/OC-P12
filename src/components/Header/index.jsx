import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "@assets/logo.png";

/**
 *	Header
 * 	@returns {JSX.Element} Header element
 */
export default function Header() {
	return (
		<header>
			<div className={styles.logo}>
				<img src={logo} alt="Logo SportSee" />
				<h1 className={styles.name}>SportSee</h1>
			</div>
			<ul className={styles.nav}>
				<li className={styles.nav_item}>
					<Link to="/" className={styles.nav_item_link}>
						Accueil
					</Link>
				</li>
				<li className={styles.nav_item}>
					<Link to="#" className={styles.nav_item_link}>
						Profil
					</Link>
				</li>
				<li className={styles.nav_item}>
					<Link to="#" className={styles.nav_item_link}>
						Réglage
					</Link>
				</li>
				<li className={styles.nav_item}>
					<Link to="#" className={styles.nav_item_link}>
						Communauté
					</Link>
				</li>
			</ul>
		</header>
	);
}
