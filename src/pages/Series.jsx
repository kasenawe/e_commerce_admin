import React from "react";
import TableSeries from "../components/TableLines";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux/es";
import { Container, Row, Col } from "react-bootstrap";
import Sidemenu from "../components/Sidemenu";

function Series() {
  const loggedAdmin = useSelector((state) => state.admin);
  return (
    <Container fluid>
      <Row>
        {admin && (
          <Col xs={12} md={2} lg={2}>
            <Sidemenu />
          </Col>
        )}
        <Col xs={12} md={10} lg={10}>
          <Button variant="primary" className="float-end adminButton mb-2">
            Add New Line
          </Button>
          <TableSeries />
        </Col>
      </Row>
    </Container>
  );
}

export default Series;
