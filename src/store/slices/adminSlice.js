import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
	addList: false,
	changeList: false,
};

export const adminSlice = createSlice({
	name: "adminList",
	initialState,
	reducers: {
		createNewProductStart: (state) => {
			state.addList = true;
		},
		createNewProductSucces: (state, action) => {
			state.adminList = action.payload;
		},
		createNewProductFailure: (state) => {
			state.addList = false;
		},
		chooseProductsChangeStart: (state) => {
			state.changeList = true;
		},
		chooseProductsChangeSucces: (state, action) => {
			state.adminList = action.payload;
		},
	},
});

export const {
	createNewProductStart,
	createNewProductSucces,
	chooseProductsChangeStart,
	chooseProductsChangeSucces,
} = adminSlice.actions;

//selectors

export const setNewProducts = ({
	img,
	name,
	gender,
	fragrance,
	discription,
	up_notes,
	hearat_notes,
	basic_note,
	cost,
}) => {
	return async (dispatch) => {
		try {
			dispatch(createNewProductStart());
			await axios.post("http://localhost:3004/products/", {
				img: img,
				name: name,
				gender: gender,
				fragrance: fragrance,
				discription: discription,
				up_notes: up_notes,
				hearat_notes: hearat_notes,
				basic_note: basic_note,
				cost: cost,
			});
			// dispatch(getProducts());
		} catch (e) {
			dispatch(e);
		}
	};
};

export default adminSlice.reducer;
