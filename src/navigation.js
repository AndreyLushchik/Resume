import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import CartPage from "./pages/cart";
import OpenProduct from "./components/OpenProduct";
//import { useDispatch, useSelector } from "react-redux";

export default function Navigator() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/:id" element={<OpenProduct />} />
				<Route
					path="/works"
					element={<div className="content">Работы</div>}
				></Route>
				<Route
					path="/about"
					element={<div className="content">About</div>}
				></Route>
				<Route path="/Cart" element={<CartPage />}></Route>
				<Route path="/admin" element={<Admin />}></Route>
			</Routes>
		</Router>
	);
}
