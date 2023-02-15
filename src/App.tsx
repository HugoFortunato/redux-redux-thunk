import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

import { connect, useDispatch } from "react-redux";
import storeType from "types/storeType";
import { getPosts, addPost, removePost} from "actions";
import AppPropType from "./AppPropType";
import { useForm, SubmitHandler } from "react-hook-form";
import { Dispatch } from "redux";

interface IFormInput {
  id: number;
	body: string;
	title: string;
}

const App: React.FC<AppPropType> = ({ getPosts, addPost, removePost, posts }) => {
	const { register, handleSubmit } = useForm<IFormInput>();
	const dispatch: Dispatch<any> = useDispatch()
	const [myPosts, setMyPosts] = useState(posts)	
	console.log(posts)

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		addPost(data)

		const addNewItem = [...myPosts, data]

		setMyPosts(addNewItem)
	}

	const deletePost = useCallback(async (id: number, index: number) => {  
		try {
			
      setMyPosts((oldPosts) => {
				return oldPosts.filter((_, i) => i !== index)
			 })

			await dispatch(removePost(String(id)))

		} catch (err) {
      console.log(err)
		}
	}, [dispatch, removePost])


	useEffect(() => {
		getPosts();
	}, [getPosts]);

	useEffect(() => {
		setMyPosts(posts)
	}, [posts])


	return (
		<div className="App">
     <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("id")} />
      <input {...register("title")} />
      <input {...register("body")} />
      
      <input type="submit" />
    </form>


			<h1>Posts</h1>
			{myPosts.map((post, index) => (
				<div className="post" key={index}>
					<h2>{post?.title}</h2>
					<p>{post?.body}</p>

					<button type="submit" onClick={() => deletePost(post.id, index)}>Excluir</button>
				</div>

			))}
		</div>
	);
};

const mapStateToProps = (state: storeType) => {
	return {
		posts: state.posts,
	};
};

export default connect(mapStateToProps, { getPosts, addPost, removePost })(App);
