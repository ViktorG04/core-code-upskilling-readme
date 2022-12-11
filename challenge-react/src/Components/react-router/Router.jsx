import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navigate from "./Navigate";
import Photos from "./Photos";
import Posts from "./Posts";
import Users from "./Users";
import './router.css'

const Router = () => {
  return (
    <div className="router-container">
      <BrowserRouter>
        <h1>Router blog</h1>
        <hr style={{background: 'black'}}/>
        <Routes>
          <Route path="/" element={<Navigate />} />
          <Route path="/users" element={<Users />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
};

export default Router;
