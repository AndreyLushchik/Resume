import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../store/slices/mainPageSlice";
import { getProducts } from "../../store/slices/productsSlice";
import { setCartObj } from "../../store/slices/cartSlice";
import "./style.css";
import { Link } from "react-router-dom";

const Products = () => {
	const [total, setTotal] = useState({});
	const dispatch = useDispatch();
	const productsList = useSelector(getFilteredProducts);

	const refreshPlus = (e) => {
		setTotal((total) => ({
			...total,
			[e.target.name]: total[e.target.name] ? total[e.target.name] + 1 : 1,
		}));
	};
	const refreshMinus = (e) => {
		setTotal((total) => ({
			...total,
			[e.target.name]: total[e.target.name] ? total[e.target.name] - 1 : 0,
		}));
	};

	const updateObj = (e) => {
		if (e.target.value === "plus") {
			refreshPlus(e);
		} else {
			refreshMinus(e);
		}
	};
	useEffect(() => {
		if (!productsList.length) {
			dispatch(getProducts);
		}
	}, [productsList]);

	return (
		<div className="primary">
			{productsList.map((item) => {
				return (
					<div className="product" key={item.id}>
						<h5 className="name-product">{item.name}</h5>
						<Link to={`/${item.id}`} style={{ cursor: "pointer" }}>
							<img
								src={item.img}
								alt="aroma"
								className="product-img"
								width="250px"
								height="250px"
							/>
						</Link>
						<span className="product-fragrance">{item.fragrance}</span>
						<p className="product-cost">{item.cost}.00 руб/шт</p>
						<div className="products-counter">
							<button
								className="count-btn"
								name={item.id}
								value="minus"
								onClick={updateObj}
							>
								-
							</button>
							<input
								type="number"
								value={total[item.id] || 0}
								className="count-btn"
								title="Кол-во"
								readOnly
							/>
							<button
								className="count-btn"
								name={item.id}
								value="plus"
								onClick={updateObj}
							>
								+
							</button>
							<button
								className="bascket-btn"
								onClick={() => dispatch(setCartObj(total))}
							>
								🛒
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Products;
