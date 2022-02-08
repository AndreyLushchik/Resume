import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../store/slices/mainPageSlice";
import { getProducts } from "../../store/slices/productsSlice";
import "./style.css";

const Products = () => {
	const [total, setTotal] = useState({});
	const dispatch = useDispatch();
	const productsList = useSelector(getFilteredProducts);

	function returnObj(e) {
		if (e.target.value === "plus") {
			setTotal((total) => ({
				...total,
				[e.target.name]: total[e.target.name] ? (total[e.target.name] += 1) : 1,
			}));
			console.log("hi");
		} else {
			setTotal((total) => ({
				[e.target.name]: total[e.target.name] ? (total[e.target.name] -= 1) : 1,
				...total,
			}));
		}
	}
	useEffect(() => {
		if (!productsList.length) {
			dispatch(getProducts);
		}
	}, [productsList]);

	return (
		<div className="primary">
			{productsList.map((item) => {
				return (
					<div key={item.id} className="product">
						<h5 className="name-product">{item.name}</h5>
						<img
							src={item.img}
							alt="aroma"
							className="product-img"
							width="250px"
							height="250px"
						/>
						<span className="product-fragrance">{item.fragrance}</span>
						<p className="product-cost">{item.cost}.00 руб/шт</p>
						<div className="products-counter">
							<button
								className="count-btn"
								name={item.id}
								value="minus"
								onClick={returnObj}
							>
								-
							</button>
							<input
								type="number"
								value={total[item.id] || 0}
								className="count-btn"
								title="Кол-во"
								min={1}
								readOnly
							/>
							<button
								className="count-btn"
								name={item.id}
								value="plus"
								onClick={returnObj}
							>
								+
							</button>
							<button className="bascket-btn">🛒</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Products;
