import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./TableBrands.css";

function TableBrands() {
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
      <table className="table table-dark table-hover text-center">
        <thead>
          <tr>
            <th scope="col" className="bg-header">
              Brand Name
            </th>
            <th scope="col" className="bg-header">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rolex</td>
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
          <tr>
            <td>Victorinox Swiss Army</td>

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
          <tr>
            <td>Patek Philippe</td>

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
          <tr>
            <td>Omega</td>

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
        </tbody>
      </table>
      <ToastContainer />
    </>
  );
}
export default TableBrands;
