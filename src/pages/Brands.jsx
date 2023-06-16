import React from "react";
import TableBrands from "../components/TableBrands";
import Button from "react-bootstrap/Button";

function Brands() {
  return (
    <>
      <h1>Brands</h1>
      <Button variant="primary" className="float-end adminButton">
        New Brand
      </Button>
      <TableBrands />
    </>
  );
}

export default Brands;
