import React from "react";
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

  const handleOnClick = () => {
    notifyError();
  };

  return (
    <>
      <table className="border table table-dark table-hover text-center">
        <thead>
          <tr>
            <th scope="col">Color Name</th>
            <th scope="col">Color Code</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>white</td>
            <td>#ffffff</td>
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
                className="icon"
                onClick={handleOnClick}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <ToastContainer />
    </>
  );
}
export default TableColors;
