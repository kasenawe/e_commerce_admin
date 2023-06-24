import React from "react";
import TableLines from "../components/TableLines";
import Button from "react-bootstrap/Button";
import NavbarComponent from "../components/NavbarComponent";

function Lines() {
  return (
    <>
      <NavbarComponent />
      <div className="text-center">
        <h1 className="mt-2">Lines</h1>
        <Button variant="primary" className="float-end adminButton mb-2">
          Add New Line
        </Button>
        <TableLines />
      </div>
    </>
  );
}

export default Lines;
