import React from "react";
import TableColors from "../components/TableColors";
import CreateColor from "../components/CreateColor";

import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidemenu from "../components/Sidemenu";

function Colors() {
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
          <CreateColor />
          <TableColors />
        </Col>
      </Row>
    </Container>
  );
}

export default Colors;
