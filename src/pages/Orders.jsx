import React from "react";
import TableOrders from "../components/TableOrders";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux/es";
import { Container, Row, Col } from "react-bootstrap";
import Sidemenu from "../components/Sidemenu";

function Orders() {
  const admin = useSelector((state) => state.admin);
  const [orders, setOrders] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_DOMAIN}/api/admin/orders`,
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        }
      );
      setOrders(response.data);
    };

    getOrders();
  }, [render]);

  return (
    <Container fluid>
      <Row>
        {admin && (
          <Col xs={12} md={2} lg={2}>
            <Sidemenu />
          </Col>
        )}
        <Col xs={12} md={10} lg={10}>
          <TableOrders orders={orders} render={render} setRender={setRender} />
        </Col>
      </Row>
    </Container>
  );
}

export default Orders;
