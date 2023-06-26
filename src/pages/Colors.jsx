import React from "react";
import TableColors from "../components/TableColors";
import CreateColor from "../components/CreateColor";

function Colors() {
  return (
    <>
      <div className="text-center margin5">
        <h1 className="mt-2 family-pinyon">Colors</h1>
        <CreateColor />
        <TableColors />
      </div>
    </>
  );
}

export default Colors;
