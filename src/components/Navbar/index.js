import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
	return (
		<div className="navigation">
			<div>
				<Link to="/" className="text-link">
					<img
						src="/images/logo.png"
						alt=""
						className="logo"
						width="25px"
						height="25px"
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
						<Link to="/Works" className="text-link">
							Контакты
						</Link>
					</li>
					<li className="nav-link">
						<Link to="/About" className="text-link">
							О нас
						</Link>
					</li>
					<li className="nav-link">
						<Link to="/Cart" className="text-link">
							Корзина
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
