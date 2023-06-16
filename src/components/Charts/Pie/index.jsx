import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";
import styles from "./Pie.module.scss";

export default class Example extends PureComponent {
	render() {
		const { score } = this.props;

		const data = [{ name: "", value: 1 }];
		const COLORS = ["#ff0101"];

		return (
			<div className={styles.chart}>
				<p className={styles.name}>Score</p>
				<PieChart width={260} height={260} onMouseEnter={this.onPieEnter} className={styles.pieChart}>
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
}
