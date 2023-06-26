import React from "react";

function TableOrders() {
  return (
    <table className="border table table-dark table-hover text-center">
      <thead>
        <tr>
          <th scope="col" className="bg-header">
            #
          </th>
          <th scope="col" className="bg-header">
            Date
          </th>
          <th scope="col" className="bg-header">
            Client
          </th>
          <th scope="col" className="bg-header">
            Address
          </th>
          <th scope="col" className="bg-header">
            Status
          </th>
          <th scope="col" className="bg-header">
            Total Price
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>16-06-2023</td>
          <td>Rupert Lopez</td>
          <td>Rivera 1415</td>
          <td>Delivered</td>
          <td>$500</td>
        </tr>
      </tbody>
    </table>
  );
}
export default TableOrders;
