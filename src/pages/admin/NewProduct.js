import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../store/slices/productsSlice";
import "./style.css";

const propArr = [
	"img",
	"name",
	"gender",
	"fragrance",
	"discription",
	"up_notes",
	"hearat_notes",
	"basic_note",
	"cost",
];

const NewProduct = () => {
	const [fields, setFields] = useState({});
	const dispatch = useDispatch();

	function onEditClick() {
		dispatch(createProduct(fields));
	}
	return (
		<div className="new-product_input">
			{propArr.map((item, i) => {
				return (
					<label key={item}>
						<span>{item}</span>
						<input
							type="text"
							defaultValue={null}
							onChange={(e) =>
								setFields((fields) => ({ ...fields, [item]: e.target.value }))
							}
						/>
					</label>
				);
			})}

			<label>
				<button onClick={onEditClick}>edit</button>
			</label>
		</div>
	);
};
export default NewProduct;
