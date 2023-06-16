import React from "react";
import TableSeries from "../components/TableSeries";
import Button from "react-bootstrap/Button";

function Series() {
  return (
    <div className="text-center">
      <h1 className="mt-2">Series</h1>
      <Button variant="primary" className="float-end adminButton mb-2">
        Add New Serie
      </Button>
      <TableSeries />
    </div>
  );
}

export default Series;
