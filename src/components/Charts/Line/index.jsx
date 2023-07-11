import { LineChart, Line, XAxis, YAxis, Tooltip, Dot, Rectangle } from "recharts";
import styles from "./Line.module.scss";

/**
 * Customized Axis Tick component for the chart
 * @param {number} props.x x-coordinate for the tick
 * @param {number} props.y y-coordinate for the tick
 * @param {object} payload payload for the kick
 * @returns {JSX.Element} rendered customized axis ticks
 */
const CustomizedAxisTick = ({ x, y, payload }) => (
	<g transform={`translate(${x},${y})`}>
		<text x={0} y={0} textAnchor="middle" className={styles.XAxisText}>
			{payload.value}
		</text>
	</g>
);

/**
 * Custom Tooltip component for the chart
 * @param {boolean} active - Indicates if the tooltip is active
 * @param {object} payload - The payload for the tooltip
 * @returns {JSX.Element|null} The rendered component, or null if not active
 */
const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		const data = payload[0].payload;

		if (!data.day) {
			return null;
		}

		return (
			<div className={styles.tooltip}>
				<p>{data.sessionLength + " min"}</p>
			</div>
		);
	}

	return null;
};

/**
 * Custom Dot component for the chart
 * @param {number} props.cx x-coordinate for the dot
 * @param {number} props.cy y-coordinate for the dot
 * @param {number} props.index index of the dot.
 * @param {Array} props.data data array for the dots
 * @returns {JSX.Element|null} The rendered component, or null for specific indices.
 */
const CustomDot = ({ cx, cy, index, data }) => {
	if (index === 0 || index === data.length - 1) {
		return null;
	}
	return <Dot cx={cx} cy={cy} fill="#fff" r={4} stroke="#ffffff50" strokeWidth={10} />;
};

/**
 * Custom Cursor component for the chart
 * @param {Array} props.points - The points array for the cursor
 * @param {number} props.width - The width of the cursor
 * @returns {JSX.Element} The rendered component
 */
const CustomCursor = ({ points, width }) => {
	const { x } = points[0];
	return <Rectangle fill="#00000010" x={x} width={width} height={260} />;
};

/**
 * Line Chart component for displaying user average sessions
 * @param {object} props.userAverageSessions - The user's average sessions data
 * @returns {JSX.Element} The rendered component
 */
export default function LineChartComponent({ userAverageSessions }) {
	const data = userAverageSessions.averageSessions;

	return (
		<LineChart width={260} height={260} data={data} className={styles.chart} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
			<text x={30} y={30} fill="#ffffff50" textAnchor="start" dominantBaseline="central">
				<tspan className={styles.title}>Durée moyenne des</tspan>
				<tspan x={30} dy={20} className={styles.title}>
					sessions
				</tspan>
			</text>
			<XAxis
				dataKey="dayOfWeek"
				height={60}
				tick={<CustomizedAxisTick />}
				tickLine={false}
				axisLine={false}
				tickMargin={32}
				interval="preserveStartEnd"
			/>
			<YAxis dataKey="sessionLength" type="number" domain={["dataMin", "dataMax + 60"]} hide />
			<Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
			<Line type="natural" dataKey="sessionLength" stroke="url(#gradient)" strokeWidth={3} dot={false} activeDot={<CustomDot data={data} />} />
			<defs>
				<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="#ffffff40" />
					<stop offset="100%" stopColor="#fff" />
				</linearGradient>
			</defs>
		</LineChart>
	);
}
