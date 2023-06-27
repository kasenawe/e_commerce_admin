import React from "react";
import TableOrders from "../components/TableOrders";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es";

function Orders() {
  const loggedAdmin = useSelector((state) => state.admin);
  const [orders, setOrders] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_DOMAIN}/api/admin/orders`,
        {
          headers: {
            Authorization: `Bearer ${loggedAdmin.token}`,
          },
        }
      );
      setOrders(response.data);
    };

    getOrders();
  }, [render]);

  return (
    <>
      <div className="text-center margin5">
        <h1 className="mt-2 family-pinyon">Orders</h1>
        <TableOrders orders={orders} render={render} setRender={setRender} />
      </div>
    </>
  );
}

export default Orders;
