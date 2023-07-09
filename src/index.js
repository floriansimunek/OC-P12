/* CSS */
import "./index.css";

/* DEPENDANCIES */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

/* COMPONENTS */
import Header from "@components/Header";
import Menu from "@components/Menu";

/* PAGES */
import Home from "./pages/Home";
import UserInformations from "./pages/UserInformations";

/* ICONS */
import yogaIcon from "@assets/icons/activities/yoga.svg";
import swimIcon from "@assets/icons/activities/swimming.svg";
import bikeIcon from "@assets/icons/activities/bike.svg";
import bodyIcon from "@assets/icons/activities/bodybuilding.svg";

const ICONS = [yogaIcon, swimIcon, bikeIcon, bodyIcon];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Header />
			<Menu icons={ICONS} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user/:id" element={<UserInformations />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

