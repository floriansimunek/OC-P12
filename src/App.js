/* COMPONENTS */
import Header from "./components/Header";
import Menu from "./components/Menu";
import Hello from "./components/Hello";
import CardsList from "./components/CardsList";
import PieChart from "./components/Charts/Pie";

/* ICONS */
import yogaIcon from "./assets/icons/activities/yoga.svg";
import swimIcon from "./assets/icons/activities/swimming.svg";
import bikeIcon from "./assets/icons/activities/bike.svg";
import bodyIcon from "./assets/icons/activities/bodybuilding.svg";

const ICONS = [yogaIcon, swimIcon, bikeIcon, bodyIcon];
const CARDS = [
	{
		type: "energy",
		number: "1,930",
		unity: "kCal",
		name: "Calories",
		color: "#ff0000",
	},
	{
		type: "chicken",
		number: "155",
		unity: "g",
		name: "Proteines",
		color: "#4ab8ff",
	},
	{
		type: "apple",
		number: "290",
		unity: "g",
		name: "Glucides",
		color: "#fdcc0c",
	},
	{
		type: "cheeseburger",
		number: "50",
		unity: "g",
		name: "Lipides",
		color: "#fd5181",
	},
];

export default function App() {
	return (
		<>
			<Header />
			<Menu icons={ICONS} />
			{/* <PieChart /> */}
			{/* <Hello /> */}
			{/* <CardsList cards={CARDS} /> */}
		</>
	);
}
