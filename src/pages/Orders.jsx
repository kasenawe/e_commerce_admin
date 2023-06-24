import React from "react";
import TableOrders from "../components/TableOrders";
import NavbarComponent from "../components/NavbarComponent";

function Orders() {
  return (
    <>
      <NavbarComponent />
      <div className="text-center">
        <h1 className="mt-2">Orders</h1>
        <TableOrders />
      </div>
    </>
  );
}

export default Orders;
