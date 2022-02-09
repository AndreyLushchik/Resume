import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartState: {},
};

export const cartSlice = createSlice({
	name: "cartCounter",
	initialState,
	reducers: {
		setCartObj: (state, action) => {
			state.cartState = action.payload;
		},
		increment: (state, action) => {
			const key = action.payload;
			state.cartState[key] += 1;
		},
		decrement: (state, action) => {
			state.cartState[action.payload]
				? (state.cartState[action.payload] -= 1)
				: delete state.cartState[action.payload];
		},
	},
});

export const { setCartObj, increment, decrement } = cartSlice.actions;

//selector

export const selectCart = (state) => state.cart.cartState;

export default cartSlice.reducer;
