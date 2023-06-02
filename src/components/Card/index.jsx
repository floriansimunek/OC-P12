import styles from "./Card.module.scss";
import { ReactComponent as EnergyIcon } from "../../assets/icons/energy.svg";
import { ReactComponent as ChickenIcon } from "../../assets/icons/chicken.svg";
import { ReactComponent as AppleIcon } from "../../assets/icons/apple.svg";
import { ReactComponent as CheeseburgerIcon } from "../../assets/icons/cheeseburger.svg";

const iconMap = {
	energy: <EnergyIcon />,
	chicken: <ChickenIcon />,
	apple: <AppleIcon />,
	cheeseburger: <CheeseburgerIcon />,
};

export default function Card({ card }) {
	const cardStyle = {
		"--card-iconBlock-color": card.color + "10",
		"--card-icon-color": card.color,
	};

	const icon = iconMap[card.type] || null;

	return (
		<div className={styles.card}>
			<div className={styles.iconBlock} style={cardStyle}>
				{icon}
			</div>
			<div className={styles.data}>
				<div className={styles.number}>{`${card.number}${card.unity}`}</div>
				<div className={styles.name}>{card.name}</div>
			</div>
		</div>
	);
}
