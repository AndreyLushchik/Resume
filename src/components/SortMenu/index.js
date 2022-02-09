import React, { useEffect, useState } from "react";
import { getProducts } from "../../store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";

import "./style.css";
import { changeFilter, getFilter } from "../../store/slices/mainPageSlice";

const genders = [
	{
		key: "female",
		title: "Женский",
	},
	{
		key: "male",
		title: "Мужской",
	},
	{
		key: "unisex",
		title: "Унисекс",
	},
];

const SortMenu = () => {
	const filter = useSelector(getFilter);
	const dispatch = useDispatch();

	function onInputChange(e) {
		dispatch(changeFilter({ key: e.target.name, checked: e.target.checked }));
	}

	return (
		<aside className="menu">
			<div>аромат</div>
			<div className="input-area">
				{genders.map((item) => {
					return (
						<label htmlFor={item.key} key={item.key}>
							<input
								type="checkbox"
								name={item.key}
								checked={filter[item.key] || false}
								onChange={onInputChange}
								id={item.key}
							/>
							<span>{item.title}</span>
						</label>
					);
				})}
			</div>
		</aside>
	);
};

export default SortMenu;
