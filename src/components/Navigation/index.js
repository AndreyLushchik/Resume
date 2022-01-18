import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navigation = () => {
	return (
		<div className="navigation">
			<div>Logo</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/Works">My project</Link>
					</li>
					<li>
						<Link to="/About">About</Link>
					</li>
					<li>
						<Link to="Contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
