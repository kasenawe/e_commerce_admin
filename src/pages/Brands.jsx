import React from "react";
import TableBrands from "../components/TableBrands";
import Button from "react-bootstrap/Button";

function Brands() {
  return (
    <div className="text-center">
      <h1 className="mt-2">Brands</h1>
      <Button variant="primary" className="float-end adminButton mb-2">
        Add New Brand
      </Button>
      <TableBrands />
    </div>
  );
}

export default Brands;
