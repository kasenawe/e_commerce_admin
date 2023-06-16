import React from "react";

import "./TableAdmins.css";

function TableAdmins() {
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col">Username</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>markotto</td>
          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>jacobthor</td>
          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan="2">Larry the Bird</td>
          <td>birdy</td>
          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableAdmins;
