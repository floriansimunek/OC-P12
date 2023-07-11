import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import styles from "./Radar.module.scss";

/**
 * Custom tick component for the polar angle axis
 * @param {object} props.payload - The payload for the tick
 * @param {number} props.x - The x-coordinate for the tick
 * @param {number} props.y - The y-coordinate for the tick
 * @param {number} props.cx - The x-coordinate for the center of the chart
 * @param {number} props.cy - The y-coordinate for the center of the chart
 * @param {string} props.textAnchor - The text anchor for the tick
 * @param {string} props.stroke - The stroke color for the tick
 * @param {number} props.radius - The radius of the chart
 * @returns {JSX.Element} The rendered component
 */
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

/**
 * Radar Chart component for displaying user's performance
 * @param {object} props.userPerformance - The user's performance data
 * @returns {JSX.Element} The rendered component
 */
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
