import React from "react";
import TableColors from "../components/TableColors";
import Button from "react-bootstrap/Button";

function Colors() {
  return (
    <>
      <h1>Colors</h1>
      <Button variant="primary" className="float-end adminButton">
        New Color
      </Button>
      <TableColors />
    </>
  );
}

export default Colors;
