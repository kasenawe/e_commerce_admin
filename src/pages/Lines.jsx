import { useState } from "react";
import TableLines from "../components/TableLines";
import CreateLine from "../components/CreateLine";

function Lines() {
  const [render, setRender] = useState(0);
  return (
    <>
      <div className="text-center margin5">
        <h1 className="mt-2 family-pinyon">Lines</h1>
        <CreateLine render={render} setRender={setRender} />
        <TableLines render={render} setRender={setRender} />
      </div>
    </>
  );
}

export default Lines;
