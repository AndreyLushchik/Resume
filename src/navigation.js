import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import CartPage from "./pages/cart";
import OpenProduct from "./components/OpenProduct";
import Contacts from "./pages/Contacts";
//import { useDispatch, useSelector } from "react-redux";

export default function Navigator() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/:id" element={<OpenProduct />} />
				<Route path="/Contacts" element={<Contacts />}></Route>
				<Route path="/Cart" element={<CartPage />}></Route>
				<Route path="/admin" element={<Admin />}></Route>
			</Routes>
		</Router>
	);
}
