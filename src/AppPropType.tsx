import { InferThunkActionCreatorType } from "react-redux";
import { addPostsActionCreator, getPostsActionCreator } from "types/actionCreatorTypes";
import { post } from "types/storeType";

interface AppPropType {
	getPosts: InferThunkActionCreatorType<getPostsActionCreator>;
	addPost: InferThunkActionCreatorType<addPostsActionCreator>;
	posts: post[];
}

export default AppPropType;
