import React, { useEffect, useState, useCallback } from "react";
import { responseUser } from "./fetch";
import Paragraph from "./Paragraph";
import "./randomUser.css";

const initialState = {
  name: "",
  website: "",
  email: "",
  phone: "",
};

const RandomUserData = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(initialState);

  const fetchData = useCallback(async () => {
    const data = await responseUser();
    setUsers(data);
    setUser(data[0]);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  const handleClick = () => {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    setUser(randomUser);
  };

  return (
    <div className="container-Random">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
      <h2>User Data</h2>
      <div className="container-paragraph">
        <Paragraph description="name" text={user.name} />
        <Paragraph description="website" text={user.website} />
        <Paragraph description="email" text={user.email} />
        <Paragraph description="phone" text={user.phone} />
      </div>
    </div>
  );
};

export default RandomUserData;
