import { PieChart, Pie, Cell, Label } from "recharts";
import styles from "./Pie.module.scss";

/**
 * Pie Chart component for displaying user's score
 * @param {number} props.score - The user's score
 * @returns {JSX.Element} The rendered component
 */
export default function PieChartComponent({ score }) {
	const data = [{ name: "", value: 1 }];
	const COLORS = ["#ff0101"];

	return (
		<div className={styles.chart}>
			<p className={styles.name}>Score</p>
			<PieChart width={260} height={260} className={styles.pieChart}>
				<Pie
					data={data}
					cx={"50%"}
					cy={"50%"}
					startAngle={90}
					endAngle={450}
					innerRadius={80}
					outerRadius={95}
					fill="#8884d8"
					cornerRadius={10}
					paddingAngle={`${360 - score * 100 * 3.6}`}
					dataKey="value"
				>
					<Label value={`${score * 100}%`} position="center" dy={-10} className={styles.percentage} />
					<Label value="de votre objectif" position="center" dy={10} className={styles.text} />
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</div>
	);
}
