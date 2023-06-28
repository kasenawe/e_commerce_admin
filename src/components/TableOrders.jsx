import React from "react";
import { useState } from "react";

import ModalOrder from "./ModalOrder";

function TableOrders({ orders, render, setRender }) {
  return (
    <table className="border table table-dark table-hover text-center">
      <thead>
        <tr>
          <th scope="col" className="bg-header">
            ID
          </th>
          <th scope="col" className="bg-header">
            Fullname
          </th>
          <th scope="col" className="bg-header">
            Order
          </th>
          <th scope="col" className="bg-header">
            Status
          </th>
          <th scope="col" className="bg-header">
            Address
          </th>
          <th scope="col" className="bg-header">
            CreatedAt
          </th>
          <th scope="col" className="bg-header">
            Total
          </th>
        </tr>
      </thead>
      {orders.length > 0 ? (
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td scope="row">{order.id}</td>
              <td>{order.fullname}</td>
              <td>
                <ModalOrder
                  products={order.order}
                  order={order}
                  setRender={setRender}
                  render={render}
                />
              </td>
              <td>{order.status}</td>
              <td>{order.address}</td>
              <td>{order.createdAt.slice(0, 10)}</td>
              <td>{order.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      ) : (
        <div className="">
          <p className="my-0 mx-auto">No hay ordenes disponibles</p>
        </div>
      )}
    </table>
  );
}
export default TableOrders;
