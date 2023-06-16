import React from "react";
import TableUsers from "../components/TableUsers";
import Button from "react-bootstrap/Button";

function Users() {
  return (
    <>
      <h1>Users</h1>
      <Button variant="primary" className="float-end adminButton">
        New User
      </Button>
      <TableUsers />
    </>
  );
}

export default Users;
