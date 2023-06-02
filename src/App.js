/* COMPONENTS */
import Header from "./components/Header";
import Menu from "./components/Menu";
import Hello from "./components/Hello";
import Card from "./components/Card";

/* ICONS */
import yogaIcon from "./assets/icons/yoga.svg";
import swimIcon from "./assets/icons/swimming.svg";
import bikeIcon from "./assets/icons/bike.svg";
import bodyIcon from "./assets/icons/bodybuilding.svg";

const ICONS = [yogaIcon, swimIcon, bikeIcon, bodyIcon];

export default function App() {
	return (
		<>
			<Header />
			<Menu icons={ICONS} />
			{/* <Hello /> */}
			<Card />
		</>
	);
}
