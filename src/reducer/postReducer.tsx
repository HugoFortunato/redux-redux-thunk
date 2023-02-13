import { Reducer } from "redux";

import { post } from "types/storeType";

const initialState: post[] = [];

const postReducer: Reducer<post[]> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "GET_POSTS":
			return [...state, ...action.payload];
		case "ADD_POST":
			return [...state, ...action.payload];	
		case "REMOVE_POST":
			return [...state, ...action.payload.id]
		default:
			return state;
	}
};

export default postReducer;
