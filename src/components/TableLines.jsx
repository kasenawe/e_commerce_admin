import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditLine from "./EditLine";
import { useSelector } from "react-redux";

function TableLines({ render, setRender }) {
  const [lines, setLines] = useState([]);
  const loggedAdmin = useSelector((state) => state.admin);

  let brandSlug = "";

  const notifyRemove = () =>
    toast.error("Line deleted", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleRemoveLine = async (line) => {
    const deleteLine = async () => {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_DOMAIN}api/admin/line/${line.id}`,
          {
            headers: {
              Authorization: `Bearer ${loggedAdmin.token}`,
            },
          }
        );
        setRender(render + 1);
        notifyRemove();
      } catch (error) {
        console.log(error);
      }
    };
    deleteLine();
  };

  useEffect(() => {
    const getLines = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}lines`,
      });
      setLines([...response.data]);
    };
    getLines();
  }, [render]);

  return (
    <>
      <table className="table table-dark table-hover text-center">
        <thead>
          <tr>
            <th scope="col" className="bg-header">
              Brand
            </th>
            <th scope="col" className="bg-header">
              Name
            </th>
            <th scope="col" className="bg-header">
              Description
            </th>
            <th scope="col" className="bg-header">
              Actions
            </th>
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
                    className="icon ms-4"
                    onClick={() => handleRemoveLine(line)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ToastContainer />
    </>
  );
}
export default TableLines;
