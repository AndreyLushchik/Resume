import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../store/slices/mainPageSlice";
import { getProducts, selectProducts } from "../../store/slices/productsSlice";
import "./style.css";

const Products = () => {
	//const [total, setTotal] = useState(0);
	const dispatch = useDispatch();
	const productsList = useSelector(getFilteredProducts);
	// const onChangeProductCount = (count) => {
	// 	setTotal(total + count);
	// };

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
							<button className="count-btn">-</button>
							<input
								type="number"
								defaultValue={"1"}
								className="count-btn"
								title="Кол-во"
								min={1}
								size="10"
								inputMode="numeric"
							/>

							<button className="count-btn">+</button>
							<button className="bascket-btn">🛒</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Products;
