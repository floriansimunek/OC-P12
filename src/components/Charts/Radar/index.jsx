import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import styles from "./Radar.module.scss";

const customTick = ({ payload, x, y, cx, cy, textAnchor, stroke, radius }) => (
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

export default function RadarChartComponent({ userPerformance }) {
	const data = userPerformance.performances;

	return (
		<div className={styles.chart}>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
					<PolarGrid />
					<PolarAngleAxis tick={customTick} dataKey="kind" />
					<Radar name="Stats" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}
