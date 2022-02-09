import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts, selectProducts } from "../../store/slices/productsSlice";
import "./style.css";

const OpenProduct = (e) => {
	const dispatch = useDispatch();
	const params = useParams();
	const allProducts = useSelector(selectProducts);
	const findProduct = allProducts.find((item) => item.id === Number(params.id));

	useEffect(() => {
		if (allProducts.lenght !== 0) {
			dispatch(getProducts);
		}
	}, []);
	return (
		<div className="content">
			<div className="one-product">
				<h4>{findProduct?.name}</h4>
				<p>{findProduct?.gender}</p>
				<img src={findProduct?.img} alt="" width="300px" height="300px" />
				<p className="one-product_fragrance">
					Ассоциации: {findProduct?.fragrance}
				</p>
				<p className="one-product_discription">
					Описание аромата: {findProduct?.discription}
				</p>
				<blockquote>Верхние ноты: {findProduct?.up_notes}</blockquote>
				<blockquote>Ноты сердца: {findProduct?.hearat_notes}</blockquote>
				<blockquote>Базовые ноты: {findProduct?.basic_note}</blockquote>
			</div>
		</div>
	);
};

export default OpenProduct;
