import { ThunkAction } from "redux-thunk";
import storeType from "types/storeType";
import { addPostAction, getPostsAction } from "types/actionTypes";

export type PostType = {
	id: number;
	title: string;
	body: string;
}

export type getPostsActionCreator = () => ThunkAction<
	void,
	storeType,
	{},
	getPostsAction
>;

export type addPostsActionCreator = (params: PostType) => ThunkAction<
	void,
	storeType,
	{},
	addPostAction
>;