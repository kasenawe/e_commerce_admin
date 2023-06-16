import React from "react";

function TableBrands() {
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Brand Name</th>

          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Rolex</td>

          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Victorinox Swiss Army</td>

          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Patek Philippe</td>

          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Omega</td>

          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default TableBrands;
