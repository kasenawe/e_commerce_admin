import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Sidemenu.css"; // Importa el archivo CSS

function Sidemenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Manage
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Management</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>Dashboard</li>
            <li>Brands</li>

            <li>Collections</li>

            <li>Colors</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Users</li>
            <li>Admins</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidemenu;
