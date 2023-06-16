import React, { PureComponent } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend } from "recharts";
import styles from "./Radar.module.scss";

export default class Example extends PureComponent {
	customTick({ payload, x, y, cx, cy, textAnchor, stroke, radius }) {
		return (
			<g className="recharts-layer recharts-polar-angle-axis-tick">
				<text
					radius={radius * 1.5}
					stroke={stroke}
					y={y + (y - cy) / 10}
					x={x + (x - cx) / 10}
					className="recharts-text recharts-polar-angle-axis-tick-value"
					textAnchor={textAnchor}
				>
					<tspan className={styles.axis} x={x} dy="0em">
						{payload.value}
					</tspan>
				</text>
			</g>
		);
	}

	render() {
		const { userPerformance } = this.props;

		const data = [
			{
				subject: "Intensité",
				A: userPerformance.data[5].value,
				fullMark: 100,
			},
			{
				subject: "Vitesse",
				A: userPerformance.data[4].value,
				fullMark: 100,
			},
			{
				subject: "Force",
				A: userPerformance.data[3].value,
				fullMark: 100,
			},
			{
				subject: "Endurance",
				A: userPerformance.data[2].value,
				fullMark: 100,
			},
			{
				subject: "Energie",
				A: userPerformance.data[1].value,
				fullMark: 100,
			},
			{
				subject: "Cardio",
				A: userPerformance.data[0].value,
				fullMark: 100,
			},
		];

		return (
			<div className={styles.chart}>
				<ResponsiveContainer width="100%" height="100%">
					<RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
						<PolarGrid />
						<PolarAngleAxis tick={this.customTick} dataKey="subject" />
						<Radar name="Stats" dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
					</RadarChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
