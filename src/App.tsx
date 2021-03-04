import React, { useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";
import storeType from "types/storeType";
import { getPosts } from "actions";
import AppPropType from "./AppPropType";

const App: React.FC<AppPropType> = ({ getPosts, posts }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<div className="App">
			<h1>Posts</h1>
			{posts.map((post) => (
				<div className="post" key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
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

export default connect(mapStateToProps, { getPosts })(App);
