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
      <button onClick={() => setIsUserFormOpen(!isUserFormOpen)}>+</button>
      {isUserFormOpen ? <UserForm addUserHandler={addUser} /> : null}
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>website</th>
          <th>action</th>
        </tr>
        {usersList.map((el, index) => (
          <UserRow key={index} user={el} onXClick={onXClick} />
        ))}
      </table>
    </div>
  );
};

export default UsersApp;
