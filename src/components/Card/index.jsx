import styles from "./Card.module.scss";
import energyIcon from "../../assets/icons/energy.svg";
import chickenIcon from "../../assets/icons/chicken.svg";
import appleIcon from "../../assets/icons/apple.svg";
import cheeseburgerIcon from "../../assets/icons/cheeseburger.svg";

const iconMap = {
	energy: energyIcon,
	chicken: chickenIcon,
	apple: appleIcon,
	cheeseburger: cheeseburgerIcon,
};

export default function Card({ card }) {
	const cardStyle = {
		"--card-iconBlock-color": card.color,
	};

	const icon = iconMap[card.type] || null;

	return (
		<div className={styles.card}>
			<div className={styles.iconBlock} style={cardStyle}>
				{icon && <img src={icon} className={styles.icon} alt="Energy icon" />}
			</div>
			<div className={styles.data}>
				<div className={styles.number}>{`${card.number}${card.unity}`}</div>
				<div className={styles.name}>{card.name}</div>
			</div>
		</div>
	);
}
