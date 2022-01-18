const initialState = {
	name: "Andrey",
};

const reducer = (state = initialState, action) => {
	console.log(state, action);
};

export default reducer;
