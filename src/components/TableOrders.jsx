import React from "react";

import ModalOrder from "./ModalOrder";

const statusDictionary = {
  pending: "#ffff00",
  unpaid: "#ff0000",
  sent: "#ffa500",
  delivered: "#008000",
};

function TableOrders({ orders, render, setRender }) {
  return (
    <table className="table table-dark table-hover text-center">
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
      {orders.length !== 0 ? (
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
              <td style={{ backgroundColor: statusDictionary[order.status] }}>
                {order.status}
              </td>
              <td>{order.address}</td>
              <td>{order.createdAt.slice(0, 10)}</td>
              <td>
                USD
                {setEarnings(
                  new Intl.NumberFormat("de-DE").format(order.totalPrice)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          <tr className="my-0 mx-auto">
            <td>There are not orders</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      )}
    </table>
  );
}
export default TableOrders;
