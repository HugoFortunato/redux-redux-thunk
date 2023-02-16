import { post } from "./storeType";
export interface getPostsAction {
  type: "GET_POSTS";
  payload: post[];
}

export interface addPostAction {
  type: "ADD_POST";
  payload: post[];
}

export interface removePostAction {
  type: "REMOVE_POST";
  payload: post[];
}
