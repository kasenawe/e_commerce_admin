import React from "react";
import TableLines from "../components/TableLines";
import CreateLine from "../components/CreateLine";

function Lines() {
  return (
    <>
      <div className="text-center margin5">
        <h1 className="mt-2 family-pinyon">Lines</h1>
        <CreateLine />
        <TableLines />
      </div>
    </>
  );
}

export default Lines;
