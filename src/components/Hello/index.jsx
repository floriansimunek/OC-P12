import styles from "./Hello.module.scss";

export default function Hello({ userData }) {
	return (
		<div className={styles.hello}>
			<p className={styles.name}>
				Bonjour <span className={styles.firstname}>{userData.userInfos.firstName + " " + userData.userInfos.lastName}</span>
			</p>
			<p className={styles.congratulations}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</div>
	);
}
