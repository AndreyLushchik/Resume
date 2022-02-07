import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	filter: {},
};

export const mainPageSlice = createSlice({
	name: "mainPageSlice",
	initialState,
	reducers: {
		changeFilter: (state, action) => {
			const { key, checked } = action.payload;
			state.filter[key] = checked;
		},
	},
});

// selectors

export const getFilter = (state) => state.mainPage.filter;

export const getFilteredProducts = (state) => {
	const { filter } = state.mainPage;
	const { items } = state.products;
	const isEmptyFilter = Object.values(filter).every((value) => !value);
	if (isEmptyFilter) {
		return items;
	}
	return items.filter((product) => filter[product.gender]);
};

export const { changeFilter } = mainPageSlice.actions;

export default mainPageSlice.reducer;
