import { useState } from "react";
import TableAdmins from "../components/TableAdmins";

import CreateAdmin from "../components/CreateAdmin";

function Admins() {
  const [render, setRender] = useState(0);

  return (
    <>
      <div className="text-center">
        <h1 className="mt-2">Admins</h1>

        <CreateAdmin render={render} setRender={setRender} />

        <TableAdmins render={render} setRender={setRender} />
      </div>
    </>
  );
}

export default Admins;
