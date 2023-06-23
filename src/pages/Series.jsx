import React from "react";
import TableSeries from "../components/TableLines";
import Button from "react-bootstrap/Button";

function Series() {
  return (
    <div className="text-center">
      <h1 className="mt-2">Lines</h1>
      <Button variant="primary" className="float-end adminButton mb-2">
        Add New Line
      </Button>
      <TableSeries />
    </div>
  );
}

export default Series;
