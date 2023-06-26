import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Sidemenu.css";
import { Link } from "react-router-dom";

function Sidemenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="btn" onClick={handleShow}>
        <div className="btn-content"> Manage</div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header
          closeButton
          data-bs-theme="dark"
          className="pt-2 pb-0 px-4 offcanvas-header"
        >
          <span className="offcanvas-brand">KAIROS Management</span>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column align-items-start mx-5 p-0">
          <Link className="justify-content-start fw-bold mt-3 btn-nav" to="/">
            Dashboard
          </Link>
          <Link
            className="justify-content-start fw-bold mt-3 btn-nav"
            to="/admins"
          >
            Administrators
          </Link>
          <Link
            className="justify-content-start fw-bold mt-3 btn-nav"
            to="/brands"
          >
            Brands
          </Link>
          <Link
            className="justify-content-start fw-bold mt-3 btn-nav"
            to="/colors"
          >
            Colors
          </Link>
          <Link
            className="justify-content-start fw-bold mt-3 btn-nav"
            to="/lines"
          >
            Lines
          </Link>
          <Link
            className="justify-content-start fw-bold mt-3 btn-nav"
            to="/orders"
          >
            Orders
          </Link>
          <Link
            className="justify-content-start fw-bold mt-3 btn-nav"
            to="/products"
          >
            Products
          </Link>
          <Link
            className="justify-content-start fw-bold mt-3 btn-nav"
            to="/Users"
          >
            Users
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidemenu;
