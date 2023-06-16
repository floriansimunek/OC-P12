import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Dot, Rectangle } from "recharts";
import styles from "./Line.module.scss";

const data = [
	{
		day: null,
		time: 30 < 20 ? 30 - (20 - 30) : 20 + (20 - 30),
	},
	{
		day: "L",
		time: 30,
	},
	{
		day: "M",
		time: 20,
	},
	{
		day: "M",
		time: 64,
	},
	{
		day: "J",
		time: 39,
	},
	{
		day: "V",
		time: 5,
	},
	{
		day: "S",
		time: 18,
	},
	{
		day: "D",
		time: 35,
	},
	{
		day: null,
		time: 35 < 18 ? 35 + (35 - 18) : 35 - (18 - 35),
	},
];

class CustomizedAxisTick extends PureComponent {
	render() {
		const { x, y, payload } = this.props;
		return (
			<g transform={`translate(${x},${y})`}>
				<text x={0} y={0} textAnchor="middle" className={styles.XAxisText}>
					{payload.value}
				</text>
			</g>
		);
	}
}

class CustomTooltip extends React.Component {
	render() {
		const { active, payload } = this.props;

		if (active && payload && payload.length) {
			const data = payload[0].payload;

			if (!data.day) {
				return null;
			}

			return (
				<div className={styles.tooltip}>
					<p>{data.time + " min"}</p>
				</div>
			);
		}

		return null;
	}
}

class CustomDot extends React.Component {
	render() {
		const { cx, cy, index } = this.props;
		if (index === 0 || index === data.length - 1) {
			return null;
		}
		return <Dot cx={cx} cy={cy} fill="#fff" r={4} stroke="#ffffff50" strokeWidth={10} />;
	}
}

const CustomCursor = ({ points, width }) => {
	const { x } = points[0];
	return <Rectangle fill="#00000010" x={x} width={width} height={260} />;
};

export default class Example extends PureComponent {
	render() {
		return (
			<LineChart width={260} height={260} data={data} className={styles.chart} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
				<text x={30} y={30} fill="#ffffff50" textAnchor="start" dominantBaseline="central">
					<tspan className={styles.title}>Durée moyenne des</tspan>
					<tspan x={30} dy={20} className={styles.title}>
						sessions
					</tspan>
				</text>
				<XAxis
					dataKey="day"
					height={60}
					tick={<CustomizedAxisTick />}
					tickLine={false}
					axisLine={false}
					tickMargin={32}
					interval="preserveStartEnd"
				/>
				<YAxis dataKey="time" type="number" domain={["dataMin", "dataMax + 60"]} hide />
				<Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
				<Line type="natural" dataKey="time" stroke="url(#gradient)" strokeWidth={3} dot={false} activeDot={<CustomDot />} />
				<defs>
					<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="#ffffff40" />
						<stop offset="100%" stopColor="#fff" />
					</linearGradient>
				</defs>
			</LineChart>
		);
	}
}