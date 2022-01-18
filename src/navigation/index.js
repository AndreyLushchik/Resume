import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";

export default function Navigator() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Navigation />}></Route>
				<Route path="/Works" element={<div>Работы</div>}></Route>
				<Route path="/About" element={<div>About</div>}></Route>
				<Route path="/Contact" element={<div>Contact</div>}></Route>
			</Routes>
		</Router>
	);
}
