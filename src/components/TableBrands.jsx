import React from "react";

function TableBrands() {
  return (
    <table className="border table table-dark table-hover text-center">
      <thead>
        <tr>
          <th scope="col">Brand Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rolex</td>
          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
        <tr>
          <td>Victorinox Swiss Army</td>

          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
        <tr>
          <td>Patek Philippe</td>

          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
        <tr>
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
