import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCart } from "../../store/slices/cartSlice";
import { selectProducts } from "../../store/slices/productsSlice";

const RenderCart = () => {
	const dispatch = useDispatch();
	const cartList = useSelector(selectCart);
	const allProduct = useSelector(selectProducts);
	const clearCart = allProduct.filter((item) => {
		const { id } = item;
		if (Object.keys(cartList).some((keys) => +keys === id)) {
			return true;
		} else {
			return false;
		}
	});

	return (
		<div className="primary">
			{clearCart.some((e) => e)
				? clearCart.map((item) => {
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
								<div className="products-counter">
									<button
										className="count-btn"
										name={item.id}
										value="minus"
										onClick={() => dispatch(decrement(item.id))}
									>
										-
									</button>
									<input
										type="number"
										value={cartList[item.id]}
										className="count-btn"
										title="Кол-во"
										readOnly
									/>
									<button
										className="count-btn"
										name={item.id}
										value="plus"
										onClick={() => dispatch(increment(item.id))}
									>
										+
									</button>
								</div>
							</div>
						);
				  })
				: "корзина пуста"}
		</div>
	);
};

export default RenderCart;
