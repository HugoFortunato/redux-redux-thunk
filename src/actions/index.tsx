import { getPostsActionCreator } from "types/actionCreatorTypes";
import postApi from "api/postApi";
import axios from "axios";

export const getPosts: getPostsActionCreator = () => (dispatch, getState) => {
	console.log("runnning");
	// try {
	// 	console.log("lol");
	// 	const response = await axios.get("/posts");
	// 	switch (response.status) {
	// 		case 200:
	// 			console.log(response.data);
	// 			dispatch({
	// 				type: "GET_POSTS",
	// 				payload: [],
	// 			});
	// 	}
	// } catch (err) {
	// 	console.log(err);
	// }
	dispatch({ type: "GET_POSTS", payload: [] });
};
