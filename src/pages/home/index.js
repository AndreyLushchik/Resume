import React from "react";
import "./style.css";
import Products from "../../components/Products";
import SortMenu from "../../components/SortMenu";

const Home = () => {
	return (
		<div className="content">
			<h3>Каталог</h3>
			<div className="site-content">
				<SortMenu />
				<Products />
			</div>
		</div>
	);
};

export default Home;
