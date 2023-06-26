import React from "react";
import TableLines from "../components/TableLines";
import Button from "react-bootstrap/Button";

function Lines() {
  return (
    <>
      <div className="text-center margin5">
        <h1 className="mt-2 family-pinyon">Lines</h1>
        <Button variant="primary" className="float-end adminButton mb-2">
          Add New Line
        </Button>
        <TableLines />
      </div>
    </>
  );
}

export default Lines;
