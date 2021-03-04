import { InferThunkActionCreatorType } from "react-redux";
import { getPostsActionCreator } from "types/actionCreatorTypes";
import { post } from "types/storeType";

interface AppPropType {
	getPosts: InferThunkActionCreatorType<getPostsActionCreator>;
	posts: post[];
}

export default AppPropType;
