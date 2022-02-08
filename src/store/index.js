import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./slices/productsSlice";
import mainPageSlice from "./slices/mainPageSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		products: productsSlice,
		mainPage: mainPageSlice,
	},
});
