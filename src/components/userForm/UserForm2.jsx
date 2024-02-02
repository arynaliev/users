import React, { useState, useEffect } from "react";
import "./userForm2.style.css";
import { IoChevronBackCircle } from "react-icons/io5";
import { defaultData } from "./UserForm";
import { v4 as uuidv4 } from "uuid";
import UsersApp from "../../applications/usersApp/UsersApp";

const UserForm2 = ({ addUserHandler }) => {
  const [userData, setUserData] = useState(defaultData);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addUserHandler(userData);
    setUserData(defaultData);
    setIsFormSubmitted(true);
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
      {isFormSubmitted ? null : (
        <form onSubmit={onSubmitHandler}>
          <div className="form-box">
            <input
              name="job"
              type="text"
              value={userData.job}
              onChange={onInputChange}
              placeholder="enter your job..."
            />
            <input
              name="salary"
              type="number"
              value={userData.salary}
              onChange={onInputChange}
              placeholder="enter your annual salary..."
            />

            <p id="marital-status">Marital status</p>

            <div className="marital-status-box">
              <label>Married</label>
              <input
                type="radio"
                value={userData.maritalStatus}
                onChange={onInputChange}
              />

              <label>Single</label>
              <input
                type="radio"
                value={userData.maritalStatus}
                onChange={onInputChange}
              />
            </div>

            <div className="submit-box">
              <IoChevronBackCircle />
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default UserForm2;
