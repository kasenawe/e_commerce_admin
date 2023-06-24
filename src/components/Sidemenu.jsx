import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Sidemenu.css"; // Importa el archivo CSS
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

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
          <Offcanvas.Title>
            <h5>Management</h5>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <ListGroup as={"ul"} className="border border-0 bg-transparent ms-4">
            <Link to={"/"}>Dashboard</Link>{" "}
            <ListGroup.Item
              as={"li"}
              className="border border-0 bg-transparent py-1"
            >
              <Link to={"/brands"}>Brands</Link>{" "}
            </ListGroup.Item>
            <ListGroup.Item
              as={"li"}
              className="border border-0 bg-transparent py-1"
            >
              <Link to={"/lines"}>Lines</Link>{" "}
            </ListGroup.Item>
            <ListGroup.Item
              as={"li"}
              className="border border-0 bg-transparent py-1"
            >
              <Link to={"/colors"}>Colors</Link>{" "}
            </ListGroup.Item>
            <ListGroup.Item
              as={"li"}
              className="border border-0 bg-transparent py-1"
            >
              <Link to={"/products"}>Products</Link>{" "}
            </ListGroup.Item>
            <ListGroup.Item
              as={"li"}
              className="border border-0 bg-transparent py-1"
            >
              <Link to={"/orders"}>Orders</Link>{" "}
            </ListGroup.Item>
            <ListGroup.Item
              as={"li"}
              className="border border-0 bg-transparent py-1"
            >
              <Link to={"/users"}>Users</Link>{" "}
            </ListGroup.Item>
            <ListGroup.Item
              as={"li"}
              className="border border-0 bg-transparent py-1"
            >
              <Link to={"/admins"}>Admins</Link>{" "}
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidemenu;
