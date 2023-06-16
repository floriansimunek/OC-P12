import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import styles from "./Bar.module.scss";

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
		const { userDataActivity } = this.props;

		const data = userDataActivity.sessions.map((session, index) => ({
			name: (index + 1).toString(),
			weight: session.kilogram,
			kcal: session.calories,
		}));

		const maxWeight = Math.max(...data.map((session) => session.weight));
		const minWeight = Math.min(...data.map((session) => session.weight));
		const deltaWeight = maxWeight - minWeight + 3;

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
					tickCount={deltaWeight}
					tickLine={false}
					axisLine={false}
					tick={<CustomizedAxisTick />}
					tickMargin={32}
					domain={["dataMin - 1", "dataMax + 1"]}
				/>
				<YAxis
					yAxisId="kcalAxis"
					orientation="left"
					dataKey="kcal"
					tickLine={false}
					axisLine={false}
					tick={<CustomizedAxisTick />}
					tickMargin={32}
					domain={["dataMin - 100", "dataMax + 100"]}
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
