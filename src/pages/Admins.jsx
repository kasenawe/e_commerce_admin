import React from "react";
import TableAdmins from "../components/TableAdmins";
import Button from "react-bootstrap/Button";

function Admins() {
  return (
    <div className="text-center">
      <h1 className="mt-2">Admins</h1>
      <Button variant="primary" className="float-end adminButton mb-2">
        New Admin
      </Button>

      <TableAdmins />
    </div>
  );
}

export default Admins;
