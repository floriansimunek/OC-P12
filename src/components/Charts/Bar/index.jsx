import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import styles from "./Bar.module.scss";

const data = [
	{
		name: "1",
		weight: 68,
		kcal: 350,
	},
	{
		name: "2",
		weight: 70,
		kcal: 400,
	},
	{
		name: "3",
		weight: 64,
		kcal: 250,
	},
	{
		name: "4",
		weight: 63,
		kcal: 500,
	},
	{
		name: "5",
		weight: 65,
		kcal: 300,
	},
	{
		name: "6",
		weight: 62,
		kcal: 350,
	},
	{
		name: "7",
		weight: 61,
		kcal: 250,
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

			return (
				<div className={styles.tooltip}>
					<p>{data.weight + " kg"}</p>
					<p>{data.kcal + " Kcal"}</p>
				</div>
			);
		}

		return null;
	}
}

export default class Example extends PureComponent {
	render() {
		return (
			<BarChart
				width={835}
				height={320}
				data={data}
				className={styles.chart}
				margin={{
					top: 64,
					right: 16,
					left: 16,
					bottom: 16,
				}}
			>
				<text x={30} y={30} fill="##20253A" textAnchor="start" dominantBaseline="central">
					<tspan className={styles.title}>Activité quotidienne</tspan>
				</text>
				<CartesianGrid strokeDasharray="4 2" vertical={false} />
				<XAxis dataKey="name" tickLine={false} axisLine={false} tick={<CustomizedAxisTick />} tickMargin={32} />
				<YAxis
					yAxisId="weightAxis"
					orientation="right"
					dataKey="weight"
					tickCount={3}
					tickLine={false}
					axisLine={false}
					tick={<CustomizedAxisTick />}
					tickMargin={32}
				/>
				<YAxis
					yAxisId="kcalAxis"
					orientation="left"
					dataKey="kcal"
					tickCount={3}
					tickLine={false}
					axisLine={false}
					tick={<CustomizedAxisTick />}
					tickMargin={32}
					hide
				/>
				<Legend
					align="right"
					verticalAlign="top"
					iconType="circle"
					formatter={(value) => <span className={styles.legend}>{value}</span>}
					wrapperStyle={{ color: "#74798c", fontWeight: 500, position: "absolute", top: 20, fontSize: 14 }}
				/>
				<Tooltip content={<CustomTooltip />} />
				<Bar dataKey="weight" fill="#282D30" yAxisId="weightAxis" name="Poids (kg)" barSize={7} radius={[7, 7, 0, 0]} />
				<Bar dataKey="kcal" fill="#E60000" yAxisId="kcalAxis" name="Calories brûlées (kCal)" barSize={7} radius={[7, 7, 0, 0]} />
			</BarChart>
		);
	}
}
