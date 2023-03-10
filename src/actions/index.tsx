import postApi from "api/postApi";
import { Dispatch } from "redux";
import {
  addPostsActionCreator,
  getPostsActionCreator,
  PostType,
  removePostActionCreator,
} from "types/actionCreatorTypes";

export const getPosts: getPostsActionCreator =
  () => async (dispatch: Dispatch) => {
    try {
      const response = await postApi.get("/posts");
      switch (response.status) {
        case 200:
          dispatch({
            type: "GET_POSTS",
            payload: response.data,
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

export const addPost: addPostsActionCreator =
  (params: PostType) => async (dispatch: Dispatch) => {
    try {
      const response = await postApi.post("/posts", params);
      switch (response.status) {
        case 200:
          dispatch({
            type: "ADD_POST",
            payload: response.data,
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

export const removePost: removePostActionCreator =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      const response = await postApi.delete(`/posts/${id}`);
      switch (response.status) {
        case 200:
          dispatch({
            type: "REMOVE_POST",
            payload: response.data,
          });
      }
    } catch (err) {
      console.log(err);
    }
  };
