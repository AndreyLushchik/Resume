import React from "react";
import GetDiscount from "./GetDiscount";

import RenderCart from "./RenderCart";

const CartPage = () => {
	return (
		<div className="content">
			<h2 style={{ paddingBottom: "15px" }}>Корзина</h2>
			<div className="site-content">
				<GetDiscount />
				<RenderCart />
			</div>
		</div>
	);
};

export default CartPage;
