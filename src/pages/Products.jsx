import React from "react";
import TableProducts from "../components/TableProducts";
import Button from "react-bootstrap/Button";

function Products() {
  return (
    <div className="text-center">
      <h1 className="mt-2">Products</h1>
      <Button variant="primary" className="float-end adminButton mb-2">
        New Product
      </Button>
      <TableProducts />
    </div>
  );
}

export default Products;
