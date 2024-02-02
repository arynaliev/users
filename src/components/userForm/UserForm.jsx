import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./userForm.style.css";
import UserForm2 from "./UserForm2";

export const defaultData = {
  id: "",
  name: "",
  email: "",
  phone: "",
  website: "",
  job: "",
  salary: "",
  maritalStatus: "",
};

const UserForm = ({ addUserHandler }) => {
  const [userData, setUserData] = useState(defaultData);
  const [isPage1Completed, setIsPage1Completed] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsPage1Completed(true);
    addUserHandler(userData);
    //  setUserData(defaultData);
  };

  const onInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
      id: uuidv4().slice(-3),
    });
  };

  return (
    <>
      {isPage1Completed ? (
        <UserForm2 addUserHandler={addUserHandler} />
      ) : (
        <form onSubmit={onSubmitHandler}>
          <div className="form-box">
            <div className="pages">
              <div id="page1">1</div>
              <hr />
              <div id="page2">2</div>
            </div>
            <input
              value={userData.name}
              name="name"
              type="text"
              placeholder="enter your name..."
              onChange={onInputChange}
              required
            />
            <input
              value={userData.email}
              name="email"
              type="email"
              placeholder="enter your email"
              onChange={onInputChange}
              required
            />
            <input
              value={userData.phone}
              name="phone"
              type="number"
              placeholder="enter your phone..."
              onChange={onInputChange}
              required
            />
            <input
              value={userData.website}
              name="website"
              type="text"
              placeholder="enter your website..."
              onChange={onInputChange}
            />
            <button type="submit">Next</button>
          </div>
        </form>
      )}
    </>
  );
};

export default UserForm;
