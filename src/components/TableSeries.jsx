import React from "react";

function TableSeries() {
  return (
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Brand</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Rolex</td>
          <td>Submariner</td>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            inte…
          </td>
          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default TableSeries;
