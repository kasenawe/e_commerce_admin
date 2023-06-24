import React from "react";
import TableUsers from "../components/TableUsers";
import Button from "react-bootstrap/Button";

function Users() {
  return (
    <>
      <div className="text-center">
        <h1 lassName="mt-2">Users</h1>
        <Button variant="primary" className="float-end adminButton mb-2">
          Add New User
        </Button>
        <TableUsers />
      </div>
    </>
  );
}

export default Users;
