import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Sidemenu from "./Sidemenu";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Sidemenu />

            <small>Admin</small>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
