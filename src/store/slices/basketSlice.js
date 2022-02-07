import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: 0,
};

export const basketSlice = createSlice({
	name: "basketCounter",
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

export const { increment, decrement } = basketSlice.actions;

export default basketSlice.reducer;
