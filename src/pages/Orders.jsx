import React from "react";
import TableOrders from "../components/TableOrders";

function Orders() {
  return (
    <>
      <div className="text-center margin5">
        <h1 className="mt-2 family-pinyon">Orders</h1>
        <TableOrders />
      </div>
    </>
  );
}

export default Orders;
