import React from "react";
import TableAdmins from "../components/TableAdmins";
import NavbarComponent from "../components/NavbarComponent";

import CreateAdmin from "../components/CreateAdmin";

function Admins() {
  return (
    <>
      <NavbarComponent />
      <div className="text-center">
        <h1 className="mt-2">Admins</h1>

        <CreateAdmin />

        <TableAdmins />
      </div>
    </>
  );
}

export default Admins;
