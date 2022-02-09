import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	fullPrice: 0,
	cartState: {},
};

export const cartSlice = createSlice({
	name: "cartCounter",
	initialState,
	reducers: {
		setCartObj: (state, action) => {
			state.cartState = action.payload;
			state.fullPrice = getDiscount(state);
		},
		increment: (state, action) => {
			const key = action.payload;
			state.cartState[key] += 1;
			state.fullPrice = getDiscount(state);
		},
		decrement: (state, action) => {
			state.cartState[action.payload]
				? (state.cartState[action.payload] -= 1)
				: delete state.cartState[action.payload];
			state.fullPrice = getDiscount(state);
		},
	},
});

export const { setCartObj, increment, decrement } = cartSlice.actions;

//selector

export const selectCart = (state) => state.cart.cartState;
export const discountPrice = (state) => state.cart.fullPrice;

export const getDiscount = (state) => {
	if (Object.keys(state.cartState).length === 0) {
		return 0;
	} else {
		const amount = Object.values(state.cartState).reduce((a, b) => a + b);
		if (amount >= 5) {
			return amount * 10;
		} else if (amount === 4) {
			return 45;
		} else if (amount === 3) {
			return 35;
		} else {
			return amount * 15;
		}
	}
};

export default cartSlice.reducer;
