import React from "react";
import AdminList from "./AdminList";
import AdminMenu from "./AdminMenu";

const AdminPanel = () => {
	return (
		<div className="content">
			{/* <h5>Названия духов</h5> */}

			<br />

			<div className="site-content">
				{/* <AdminMenu /> */}
				<AdminList />
			</div>
		</div>
	);
};

export default AdminPanel;
