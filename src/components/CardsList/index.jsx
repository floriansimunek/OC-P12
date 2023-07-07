import styles from "./CardsList.module.scss";
import Card from "../Card";

/**
 *
 * @param {Array<Card>} CardsList Array of Card component
 * @returns {JSX.Element} CardsList Element
 */
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
