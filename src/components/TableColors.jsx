import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TableColors() {
  const notifyError = () =>
    toast.error("Out of the scope of the project", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const [colors, setColors] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const getColors = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_DOMAIN}/colors`
      );
      setColors(response.data);
    };
    getColors();
  }, [render]);

  const handleOnClick = () => {
    notifyError();
  };

  return (
    <>
      <table className="table table-dark table-hover text-center">
        <thead>
          <tr>
            <th scope="col" className="bg-header">
              Color Name
            </th>
            <th scope="col" className="bg-header">
              Color Code
            </th>
            <th scope="col" className="bg-header">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color) => (
            <tr key={color.id}>
              <td>{color.name}</td>
              <td className="d-flex gap-4 justify-content-center align-content-center">
                <input
                  type="color"
                  name="color"
                  id="color"
                  disabled
                  value={color.colorCode}
                />
                {color.colorCode}
              </td>
              <td>
                <img
                  src="/img/edit_icon.svg"
                  alt="edit icon"
                  className="icon"
                  onClick={handleOnClick}
                />
                <img
                  src="/img/trash_icon.svg"
                  alt="edit icon"
                  className="icon ms-4"
                  onClick={handleOnClick}
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
export default TableColors;
