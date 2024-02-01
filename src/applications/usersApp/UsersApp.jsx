import React, { useEffect, useState } from "react";
import "./usersApp.style.css";
import UserRow from "../../components/userCard/UserRow";
import UserForm from "../../components/userForm/UserForm";

const url = "https://jsonplaceholder.typicode.com/users";

const UsersApp = () => {
  const [usersList, setUsersList] = useState([]);
  const [isUserFormOpen, setIsUserFormOpen] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setUsersList([...usersList, ...data]);
    } catch (err) {
      console.log("error", err);
    }
  };

  const addUser = (user) => {
    setUsersList([...usersList, user]);
  };

  const onXClick = (id) => {
    setUsersList(usersList.filter((el) => el.id !== id));
  };

  return (
    <div className="usersApp-container">
      <h1>Top users of GoOgLe!</h1>
      <table>
        <thead>
          <tr className="thead-row">
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
            <th>job</th>
            <th>salary</th>
            <th>marital status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((el, index) => (
            <UserRow key={index} user={el} onXClick={onXClick} />
          ))}
        </tbody>
      </table>
      <div className="addUser-btn">
        <button onClick={() => setIsUserFormOpen(!isUserFormOpen)}>
          Add user
        </button>
        {isUserFormOpen ? <UserForm addUserHandler={addUser} /> : null}
      </div>
    </div>
  );
};

export default UsersApp;
