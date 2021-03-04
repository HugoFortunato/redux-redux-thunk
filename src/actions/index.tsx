import { getPostsActionCreator } from "types/actionCreatorTypes";
import postApi from "api/postApi";

export const getPosts: getPostsActionCreator = () => async (
	dispatch,
	getState
) => {
	try {
		const response = await postApi.get("/");
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
