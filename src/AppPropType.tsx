import { getPostsActionCreator } from "types/actionCreatorTypes";
import { post } from "types/storeType";

interface AppPropType {
	getPosts: getPostsActionCreator;
	posts: post[];
}

export default AppPropType;
