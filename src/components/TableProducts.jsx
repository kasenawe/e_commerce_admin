import React from "react";

function TableProducts() {
  return (
    <table className="border table table-dark table-hover text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Brand</th>
          <th scope="col">Serie</th>
          <th scope="col">Color</th>
          <th scope="col">Name</th>
          <th scope="col">Gender</th>
          <th scope="col">Price</th>
          <th scope="col">Image</th>
          <th scope="col">stock</th>
          <th scope="col">trending</th>
          <th scope="col">description</th>
          <th scope="col">slug</th>
          <th scope="col">CreatedAt</th>
          <th scope="col">updatedAt</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Rolex</td>
          <td>Submariner</td>
          <td>black</td>
          <td>Black</td>
          <td>Man</td>
          <td>300</td>
          <td>path:</td>
          <td>20</td>
          <td>false</td>
          <td>
            The classic and iconic Submariner comes with a black dial and bezel,
            e…
          </td>
          <td>rolex-submariner-black-black</td>
          <td>2023-06-15T17:20:24.293+00:00</td>
          <td>2023-06-15T17:20:24.293+00:00</td>
          <td>
            <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
            <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default TableProducts;
