import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../store/slices/productsSlice";

const Product = ({ data: { id, ...data } }) => {
	const [fields, setFields] = useState(data);
	const dispatch = useDispatch();

	function onEditClick() {
		dispatch(updateProduct({ id, ...fields }));
	}

	return (
		<div className="product">
			{Object.keys(fields).map((key) => {
				return (
					<label key={key}>
						<span>{key}</span>
						<input
							type="text"
							value={fields[key]}
							onChange={(e) =>
								setFields((fields) => ({ ...fields, [key]: e.target.value }))
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

export default Product;
