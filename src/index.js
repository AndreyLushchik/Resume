import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import { store } from "./store";
import Navigator from "./navigation";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Navigator />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
