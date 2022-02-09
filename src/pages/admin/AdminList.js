import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProducts, selectProducts } from "../../store/slices/productsSlice";
import Product from "./Product";

const AdminList = () => {
	const dispatch = useDispatch();
	const productsList = useSelector(selectProducts);

	useEffect(() => {
		dispatch(getProducts);
	}, []);

	return (
		<div className="primary">
			{productsList.map((item) => {
				return <Product key={item.id} data={item} />;
			})}
		</div>
	);
};

export default AdminList;
