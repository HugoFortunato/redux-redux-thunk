import { post } from "./storeType";
export interface getPostsAction {
	type: "GET_POSTS";
	payload: post[];
}

export interface addPostAction {
	type: "ADD_POST";
	payload: post[];
}
