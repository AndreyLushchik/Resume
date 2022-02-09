import React from "react";
import AdminList from "./AdminList";
import NewProduct from "./NewProduct";

const AdminPanel = () => {
	return (
		<div className="content">
			{/* <h5>Названия духов</h5> */}

			<br />

			<div className="site-content">
				<div>
					Новый продукт
					<NewProduct />
				</div>

				<AdminList />
			</div>
		</div>
	);
};

export default AdminPanel;
