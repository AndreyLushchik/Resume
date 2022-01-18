import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import Navigator from "./navigation";

const store = createStore(reducer);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Navigator />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
