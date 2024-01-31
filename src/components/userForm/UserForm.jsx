import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const defaultData = {
  id: "",
  name: "",
  email: "",
  phone: "",
  website: "",
};

const UserForm = ({ addUserHandler }) => {
  const [userData, setUserData] = useState(defaultData);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addUserHandler(userData);
    setUserData(defaultData);
  };

  const onInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
      id: uuidv4().slice(0, 3),
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        value={userData.name}
        name="name"
        type="text"
        placeholder="enter your name..."
        onChange={onInputChange}
      />
      <input
        value={userData.email}
        name="email"
        type="email"
        placeholder="enter your email"
        onChange={onInputChange}
      />
      <input
        value={userData.phone}
        name="phone"
        type="number"
        placeholder="enter your phone..."
        onChange={onInputChange}
      />
      <input
        value={userData.website}
        name="website"
        type="text"
        placeholder="enter your website..."
        onChange={onInputChange}
      />

      <button>Add</button>
    </form>
  );
};

export default UserForm;
