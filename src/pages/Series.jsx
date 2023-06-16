import React from "react";
import TableSeries from "../components/TableSeries";
import Button from "react-bootstrap/Button";

function Series() {
  return (
    <>
      <h1>Series</h1>
      <Button variant="primary" className="float-end adminButton">
        New Serie
      </Button>
      <TableSeries />
    </>
  );
}

export default Series;
