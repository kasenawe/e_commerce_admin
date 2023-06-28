import TableBrands from "../components/TableBrands";
import CreateBrand from "../components/CreateBrand";

import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Sidemenu from "../components/Sidemenu";

function Brands() {
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
          <CreateBrand />
          <TableBrands />
        </Col>
      </Row>
    </Container>
  );
}

export default Brands;
