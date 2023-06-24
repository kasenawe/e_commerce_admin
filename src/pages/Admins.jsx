import React from "react";
import TableAdmins from "../components/TableAdmins";

import CreateAdmin from "../components/CreateAdmin";

function Admins() {
  return (
    <>
      <div className="text-center">
        <h1 className="mt-2">Admins</h1>

        <CreateAdmin />

        <TableAdmins />
      </div>
    </>
  );
}

export default Admins;
