import styles from "./Hello.module.scss";

/**
 * Hello
 * @param {Object} userData User data from API or Mock : firstname | lastname
 * @returns {JSX.Element} Hello element
 */
export default function Hello({ userData }) {
	return (
		<div className={styles.hello}>
			<p className={styles.name}>
				Bonjour <span className={styles.firstname}>{userData.firstName + " " + userData.lastName}</span>
			</p>
			<p className={styles.congratulations}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</div>
	);
}
