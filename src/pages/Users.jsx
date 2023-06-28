import React from "react";
import TableUsers from "../components/TableUsers";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux/es";
import { Container, Row, Col } from "react-bootstrap";
import Sidemenu from "../components/Sidemenu";

function Users() {
  const admin = useSelector((state) => state.admin);
  return (
    <Container fluid>
      <Row>
        {admin && (
          <Col xs={12} md={2} lg={2}>
            <Sidemenu />
          </Col>
        )}
        <Col xs={12} md={10} lg={10}>
          <div className="container">
            <TableUsers />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Users;
