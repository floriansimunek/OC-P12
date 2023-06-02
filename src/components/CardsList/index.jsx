import styles from "./CardsList.module.scss";
import Card from "../Card";

export default function CardsList({ cards }) {
	return (
		<ul className={styles.cardsList}>
			{cards.map((card, k) => (
				<li key={k}>
					<Card card={card} />
				</li>
			))}
		</ul>
	);
}
