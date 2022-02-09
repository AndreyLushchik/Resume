import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/slices/cartSlice";

const GetDiscount = () => {
	const [fullPrice, setFullPrice] = useState(0);
	const cartPrise = useSelector(selectCart);

	useEffect(() => {
		const setDiscount = () => {
			if (Object.keys(cartPrise).length === 0) {
				return 0;
			} else {
				const amount = Object.values(cartPrise).reduce((a, b) => a + b);
				if (amount >= 5) {
					return amount * 10;
				} else if (amount === 4) {
					return 45;
				} else if (amount === 3) {
					return 35;
				} else {
					return amount * 15;
				}
			}
		};
		setFullPrice(setDiscount());
	}, [cartPrise]);

	return <div className="menu">Цена за все: {fullPrice}руб</div>;
};
export default GetDiscount;
