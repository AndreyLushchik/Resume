import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
	return (
		<div className="navigation">
			<div>
				<Link to="/" className="text-link">
					Logo
				</Link>
			</div>
			<nav>
				<ul className="nav-list">
					<li>
						<Link to="/" className="text-link">
							Духи
						</Link>
					</li>
					<li>
						<Link to="/Works" className="text-link">
							Контакты
						</Link>
					</li>
					<li>
						<Link to="/About" className="text-link">
							О нас
						</Link>
					</li>
					<li>
						<Link to="/Contact" className="text-link">
							Корзина
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
