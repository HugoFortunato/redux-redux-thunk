import { ThunkAction } from "redux-thunk";
import {
  addPostAction,
  getPostsAction,
  removePostAction,
} from "types/actionTypes";
import storeType from "types/storeType";

export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type getPostsActionCreator = () => ThunkAction<
  void,
  storeType,
  {},
  getPostsAction
>;

export type addPostsActionCreator = (
  params: PostType
) => ThunkAction<void, storeType, {}, addPostAction>;

export type removePostActionCreator = (
  id: string
) => ThunkAction<void, storeType, {}, removePostAction>;
