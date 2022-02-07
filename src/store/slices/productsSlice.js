import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	items: [],
	error: null,
	isLoading: false,
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		getProductsStart: (state) => {
			state.isLoading = true;
		},
		getProductsFailure: (state, action) => {
			state.error = action.payload;
		},
		getProductsSuccess: (state, action) => {
			state.items = action.payload;
		},
		setProduct: (state, action) => {
			const index = state.items.findIndex(
				(item) => item.id === action.payload.id
			);
			state.items[index] = action.payload;
		},
		addProduct: (state, action) => {
			state.items.push(action.payload);
		},
	},
});

export const {
	getProductsSuccess,
	getProductsStart,
	getProductsFailure,
	setProduct,
	addProduct,
} = productsSlice.actions;

// selectors

export const selectProducts = (state) => state.products.items;

export const getProducts = async (dispatch) => {
	try {
		dispatch(getProductsStart());
		const response = await fetch("http://localhost:3004/products/");
		const data = await response.json();
		await dispatch(getProductsSuccess(data));
	} catch (error) {
		dispatch(getProductsFailure(error));
	}
};

export const updateProduct = (data) => {
	return async (dispatch) => {
		try {
			dispatch(setProduct(data));
			await axios.put(`http://localhost:3004/products/${data.id}`, data);
		} catch {}
	};
};

export const createProduct = (data) => {
	return async (dispatch) => {
		try {
			dispatch(addProduct(data));
			await axios.post(`http://localhost:3004/products`, data);
		} catch {}
	};
};
export default productsSlice.reducer;

// cartState = {
// 	cart: [
// 		{
// 			productId: 5,
// 			count: 8,
// 		},
// 	],
// };
