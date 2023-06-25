import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Sidemenu from "./Sidemenu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../redux/adminSlice";

function NavbarComponent() {
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogout() {
    dispatch(removeToken());
    navigate("/login");
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="w-75 mx-auto px-5">
          <Navbar.Brand to="/">
            <Sidemenu />
            {admin && <small className="mx-3">{admin.username}</small>}
            {admin && (
              <Link
                className="btn btn-danger rounded-pill fw-medium mb-4 w-75"
                to="/login"
                onClick={handleLogout}
              >
                Log out
              </Link>
            )}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
