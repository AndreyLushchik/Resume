import React from "react";
import { useSelector } from "react-redux";
import { discountPrice } from "../../store/slices/cartSlice";

const GetDiscount = () => {
	const price = useSelector(discountPrice);
	return <div className="menu">Цена за все: {price}руб</div>;
};
export default GetDiscount;
