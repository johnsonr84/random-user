import React from "react";

function Table({  image, name, phone, email }) {

  return (
    <tr>
      <td><img  src={image} alt={name} /></td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr> 
  );
}

export default Table;