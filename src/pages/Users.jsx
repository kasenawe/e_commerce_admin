import React from "react";
import TableUsers from "../components/TableUsers";
import Button from "react-bootstrap/Button";

function Users() {
  return (
    <>
      <div className="text-center margin5">
        <h1 className="mt-2 family-pinyon">Users</h1>
        <div className="btn float-end my-3">
          <div className="btn-content">Add New User</div>
        </div>
        <TableUsers />
      </div>
    </>
  );
}

export default Users;
