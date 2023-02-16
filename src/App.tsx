import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

import { getPosts, addPost, removePost } from "actions";
import { useForm, SubmitHandler } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import storeType from "types/storeType";

import AppPropType from "./AppPropType";

interface IFormInput {
  id: number;
  body: string;
  title: string;
}

const App: React.FC<AppPropType> = ({
  getPosts,
  addPost,
  removePost,
  posts,
}) => {
  const dispatch = useDispatch();
  const [myPosts, setMyPosts] = useState(posts);
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (newPost) => {
    addPost(newPost);

    const addNewPost = [...myPosts, newPost];

    setMyPosts(addNewPost);
  };

  const handleRemovePost = useCallback(
    async (id: number, index: number) => {
      try {
        const convertIdToString = String(id);

        await dispatch(removePost(convertIdToString));

        setMyPosts((oldPosts) => {
          return oldPosts.filter((_, i) => i !== index);
        });
      } catch (err) {
        console.log(err);
      }
    },
    [dispatch, removePost]
  );

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  useEffect(() => {
    setMyPosts(posts);
  }, [posts]);

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

          <button
            type="submit"
            onClick={() => handleRemovePost(post.id, index)}
          >
            Excluir
          </button>
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
