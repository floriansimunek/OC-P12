import styles from "./Card.module.scss";
import energyIcon from "../../assets/icons/energy.svg";

export default function Card() {
	return (
		<div className={styles.card}>
			<div className={styles.iconBlock}>
				<img src={energyIcon} className={styles.icon} alt="Energy icon" />
			</div>
			<div className={styles.data}>
				<div className={styles.number}>1930kCal</div>
				<div className={styles.name}>Calories</div>
			</div>
		</div>
	);
}
