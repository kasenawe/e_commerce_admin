import React, { useEffect, useState } from "react";
import axios from "axios";

import EditAdmin from "./EditAdmin";

import "./TableAdmins.css";

function TableAdmins() {
  const [admins, setAdmins] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const getAdmins = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/api/admin/admins`,
      });
      setAdmins(response.data);
    };
    getAdmins();
  }, [render]);

  const handleRemoveAdmin = (username) => {
    const deleteAdmin = async (username) => {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_API_DOMAIN}/api/admin/${username}`,
      });
      setRender(render + 1);
    };
    deleteAdmin(username);
  };

  return (
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
                <EditAdmin />
                <img
                  src="/img/trash_icon.svg"
                  alt="edit icon"
                  className="icon"
                  onClick={() => handleRemoveAdmin(admin.username)}
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TableAdmins;
