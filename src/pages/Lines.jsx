import { useState } from "react";
import TableLines from "../components/TableLines";
import CreateLine from "../components/CreateLine";

import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidemenu from "../components/Sidemenu";

function Lines() {
  const admin = useSelector((state) => state.admin);
  const [render, setRender] = useState(0);
  return (
    <Container fluid>
      <Row>
        {admin && (
          <Col xs={12} md={2} lg={2}>
            <Sidemenu />
          </Col>
        )}
        <Col xs={12} md={10} lg={10}>
          <CreateLine render={render} setRender={setRender} />
          <TableLines render={render} setRender={setRender} />
        </Col>
      </Row>
    </Container>
  );
}

export default Lines;
