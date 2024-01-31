import React from "react";
import "./userRow.style.css";

const UserRow = ({ onXClick, user: { id, name, email, phone, website } }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{website}</td>
      <td>
        <button onClick={() => onXClick(id)}>X</button>
      </td>
    </tr>
  );
};

export default UserRow;
