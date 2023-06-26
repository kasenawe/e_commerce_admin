import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EditAdmin from "./EditAdmin";

import "./TableAdmins.css";

function TableAdmins({ render, setRender }) {
  const loggedAdmin = useSelector((state) => state.admin);
  const [admins, setAdmins] = useState([]);

  const notifyRemove = (username) =>
    toast.success(`Admin ${username} deleted`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  useEffect(() => {
    const getAdmins = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_DOMAIN}/admins`,
          {
            headers: {
              Authorization: `Bearer ${loggedAdmin.token}`,
            },
          }
        );

        setAdmins(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAdmins();
  }, [render]);

  const handleRemoveAdmin = (username) => {
    const deleteAdmin = async (username) => {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_DOMAIN}/api/admin/${username}`,
          {
            headers: {
              Authorization: `Bearer ${loggedAdmin.token}`,
            },
          }
        );
        setRender(render + 1);
      } catch (error) {
        console.log(error);
      }
    };
    notifyRemove(username);
    deleteAdmin(username);
  };

  return (
    <>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins &&
            admins.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.username}</td>
                <td>{admin.firstname}</td>
                <td>{admin.lastname}</td>
                <td className="d-flex gap-3 justify-content-center">
                  <EditAdmin
                    adminRow={admin}
                    render={render}
                    setRender={setRender}
                  />
                  {admin.username !== loggedAdmin.username && (
                    <img
                      src="/img/trash_icon.svg"
                      alt="edit icon"
                      className="icon"
                      onClick={() => handleRemoveAdmin(admin.username)}
                    />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ToastContainer />
    </>
  );
}

export default TableAdmins;
