import React from "react";
import TableColors from "../components/TableColors";
import Button from "react-bootstrap/Button";
import NavbarComponent from "../components/NavbarComponent";

function Colors() {
  return (
    <>
      <NavbarComponent />
      <div className="text-center mt-2">
        <h1 className="mt-2">Colors</h1>
        <Button variant="primary" className="float-end adminButton mb-2">
          Add New Color
        </Button>
        <TableColors />
      </div>
    </>
  );
}

export default Colors;
