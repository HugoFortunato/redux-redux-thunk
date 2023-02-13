import { InferThunkActionCreatorType } from "react-redux";
import { addPostsActionCreator, getPostsActionCreator, removePostActionCreator } from "types/actionCreatorTypes";
import { post } from "types/storeType";

interface AppPropType {
	getPosts: InferThunkActionCreatorType<getPostsActionCreator>;
	addPost: InferThunkActionCreatorType<addPostsActionCreator>;
	removePost: InferThunkActionCreatorType<removePostActionCreator>;
	posts: post[];
}

export default AppPropType;
