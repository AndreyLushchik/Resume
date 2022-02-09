import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { discountPrice } from "../../store/slices/cartSlice";
import "./style.css";

const Navbar = () => {
	const cartPrice = useSelector(discountPrice);
	return (
		<div className="navigation">
			<div>
				<Link to="/">
					<img
						src="/images/logo.png"
						alt=""
						className="logo"
						width="100px"
						height="100px"
					/>
				</Link>
			</div>
			<nav>
				<ul className="nav-list">
					<li className="nav-link">
						<Link to="/" className="text-link">
							Духи
						</Link>
					</li>
					<li className="nav-link">
						<Link to="/Contacts" className="text-link">
							Контакты
						</Link>
					</li>
					<li className="nav-link">
						<Link to="/Cart" className="text-link cart-link">
							Корзина
							<p className="cart-price">{cartPrice ? `${cartPrice}р.` : ""}</p>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
