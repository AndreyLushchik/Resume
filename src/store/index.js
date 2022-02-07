import { configureStore } from "@reduxjs/toolkit";

import basketSlice from "./slices/basketSlice";
import productsSlice from "./slices/productsSlice";
import adminSlice from "./slices/adminSlice";
import mainPageSlice from "./slices/mainPageSlice";

export const store = configureStore({
	reducer: {
		basket: basketSlice,
		products: productsSlice,
		adminPanel: adminSlice,
		mainPage: mainPageSlice,
	},
});
