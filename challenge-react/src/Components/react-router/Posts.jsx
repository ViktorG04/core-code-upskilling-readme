import React from "react";
import { responsePosts } from "./fetch";
import Controller from "./Controller";
const Posts = () => {
  const name = "blog posts";
  const value = 'title';
  return (
    <>
      <Controller name={name} value={value} consultFetch={responsePosts} />
    </>
  );
};

export default Posts;
