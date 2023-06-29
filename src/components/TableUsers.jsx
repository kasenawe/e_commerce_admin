import React from "react";

function TableUsers() {
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col" className="bg-header">
            #
          </th>
          <th scope="col" className="bg-header">
            Firstname
          </th>
          <th scope="col" className="bg-header">
            Lastname
          </th>
          <th scope="col" className="bg-header">
            email
          </th>
          <th scope="col" className="bg-header">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>mark@gmail.com</td>
          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img
              src="/img/trash_icon.svg"
              alt="edit icon"
              className="icon ms-4"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default TableUsers;
