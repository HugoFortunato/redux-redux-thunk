import { ThunkAction } from "redux-thunk";
import storeType from "types/storeType";
import { getPostsAction } from "types/actionTypes";

export type getPostsActionCreator = () => ThunkAction<
	void,
	storeType,
	{},
	getPostsAction
>;
