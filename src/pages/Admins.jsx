import React from "react";
import TableAdmins from "../components/TableAdmins";
import Button from "react-bootstrap/Button";

function Admins() {
  return (
    <>
      <h1>Admins</h1>
      <Button variant="primary" className="float-end adminButton">
        New Admin
      </Button>

      <TableAdmins />
    </>
  );
}

export default Admins;
