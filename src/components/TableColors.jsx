import React from "react";

function TableColors() {
  return (
    <table className="border table table-dark table-hover text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Color Name</th>
          <th scope="col">Color Code</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>white</td>
          <td>#ffffff</td>
          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>black</td>
          <td>#000000</td>
          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>blue</td>
          <td>#295d90</td>
          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>green</td>
          <td>#299031</td>
          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default TableColors;
