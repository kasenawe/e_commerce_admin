import React from "react";
import TableProducts from "../components/TableProducts";
import Button from "react-bootstrap/Button";

function Products() {
  return (
    <>
      <h1>Products</h1>
      <Button variant="primary" className="float-end adminButton">
        New Product
      </Button>
      <TableProducts />
    </>
  );
}

export default Products;
