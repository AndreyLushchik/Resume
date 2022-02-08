import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartState: {},
};

export const cartSlice = createSlice({
	name: "cartCounter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;

// cartState = {
// 	cart: [
// 		{
// 			productId: 5,
// 			count: 8,
// 		},
// 	],
// };
