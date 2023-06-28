import React, { useEffect, useState } from "react";
import TableProducts from "../components/TableProducts";
import axios from "axios";
import CreateProduct from "../components/CreateProduct";
import { useSelector } from "react-redux/es";
import { Container, Row, Col } from "react-bootstrap";
import Sidemenu from "../components/Sidemenu";

function Products() {
  const admin = useSelector((state) => state.admin);
  const [products, setProducts] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_DOMAIN}/products`
      );
      setProducts(response.data);
    };

    getProducts();
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
          <CreateProduct render={render} setRender={setRender} />
          <TableProducts
            products={products}
            render={render}
            setRender={setRender}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
