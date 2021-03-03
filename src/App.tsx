import React, { useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";
import storeType from "types/storeType";
import { getPosts } from "actions";
import AppPropType from "./AppPropType";

const App: React.FC<AppPropType> = ({ getPosts }) => {
	useEffect(() => {
		console.log("running effect");
		getPosts();
		console.log("effects complete");
	}, [getPosts]);

	return (
		<div className="App">
			<h1>Posts</h1>
			<div className="post">
				<h2>This is the title 1</h2>
				<p>
					quia et suscipit\nsuscipit recusandae consequuntur expedita et
					cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
					sunt rem eveniet architecto
				</p>
			</div>
			<div className="post">
				<h2>This is the title 2</h2>
				<p>
					quia et suscipit\nsuscipit recusandae consequuntur expedita et
					cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem
					sunt rem eveniet architecto
				</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state: storeType) => {
	return {
		posts: state.posts,
	};
};

// const mapDispatchToProps = () => {
// 	return {
// 		getPosts,
// 	};
// };

export default connect(mapStateToProps, { getPosts })(App);
