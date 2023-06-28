import { useState } from "react";
import TableAdmins from "../components/TableAdmins";
import { Container, Row, Col } from "react-bootstrap";
import CreateAdmin from "../components/CreateAdmin";
import Sidemenu from "../components/Sidemenu";
import { useSelector } from "react-redux";

function Admins() {
  const [render, setRender] = useState(0);
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
          <CreateAdmin render={render} setRender={setRender} />
          <TableAdmins render={render} setRender={setRender} />
        </Col>
      </Row>
    </Container>
  );
}

export default Admins;
