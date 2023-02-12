import React, { useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";
import storeType from "types/storeType";
import { getPosts, addPost } from "actions";
import AppPropType from "./AppPropType";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  id: number;
	body: string;
	title: string;
}

const App: React.FC<AppPropType> = ({ getPosts, addPost, posts }) => {
	console.log(posts[42]?.params)
	const { register, handleSubmit } = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = (data) => {

		addPost(data)
	}

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<div className="App">
     <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("id")} />
      <input {...register("title")} />
      <input {...register("body")} />
      
      <input type="submit" />
    </form>


			<h1>Posts</h1>
			{posts.map((post, index) => (
				<div className="post" key={index}>
					<h2>{post?.params?.title}</h2>
					<p>{post?.params?.body}</p>
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

export default connect(mapStateToProps, { getPosts, addPost })(App);
