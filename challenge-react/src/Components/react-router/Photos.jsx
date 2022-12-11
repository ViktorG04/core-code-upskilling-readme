import React from "react";
import { responsePhotos } from "./fetch";
import Controller from "./Controller";
const Photos = () => {
  const name = "blog Photos";
  const value = 'url';
  return (
    <>
      <Controller name={name} value={value} consultFetch={responsePhotos} />
    </>
  );
};

export default Photos;
