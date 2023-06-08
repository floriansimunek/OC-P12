import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";
import styles from "./Pie.module.scss";

const data = [{ name: "", value: 1 }];
const COLORS = ["#ff0101"];

export default class Example extends PureComponent {
	render() {
		return (
			<div className={styles.chart}>
				<p className={styles.name}>Score</p>
				<PieChart width={260} height={260} onMouseEnter={this.onPieEnter} className={styles.pie}>
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
						paddingAngle={30}
						dataKey="value"
					>
						<Label value="12%" position="center" dy={-10} className={styles.percentage} />
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
