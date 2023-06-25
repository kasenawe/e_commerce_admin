import axios from "axios";
import React, { useEffect, useState } from "react";
import EditLine from "./EditLine";

function TableLines() {
  const [lines, setLines] = useState([]);
  const [render, setRender] = useState(0);

  let brandSlug = "";

  useEffect(() => {
    const getLines = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/lines`,
      });
      setLines([...response.data]);
    };
    getLines();
  }, [render]);

  return (
    <table className="border table table-dark table-hover text-center">
      <thead>
        <tr>
          <th scope="col">Brand</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {lines.length > 0 &&
          lines.map((line, i) => (
            <tr key={line.id}>
              <td>{line.brand.name}</td>
              <td>{line.name}</td>
              <td>{line.description.substring(0, 70) + "..."}</td>
              <td>
                <EditLine line={line} setRender={setRender} render={render} />
                <img
                  src="/img/trash_icon.svg"
                  alt="edit icon"
                  className="icon"
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
export default TableLines;
