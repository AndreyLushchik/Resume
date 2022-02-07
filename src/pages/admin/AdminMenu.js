import React, { useEffect, useState } from "react";
import { getAdminList } from "../../store/slices/adminSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminMenu = () => {
	const [nameFilter, setNameFilter] = useState({});
	const dispatch = useDispatch();

	useEffect(() => {}, [nameFilter]);

	const showProduct = (e) => {
		e.target.checked
			? setNameFilter({ ...nameFilter, [e.target.value]: e.target.value })
			: setNameFilter({ ...nameFilter, [e.target.value]: undefined });
	};

	return (
		<div className="menu">
			{[].map((item) => {
				return (
					<div key={item.id}>
						<lablel>
							<input type="checkbox" value={item.name} onChange={showProduct} />
							<span>{item.name}</span>
						</lablel>
					</div>
				);
			})}
		</div>
	);
};

export default AdminMenu;
