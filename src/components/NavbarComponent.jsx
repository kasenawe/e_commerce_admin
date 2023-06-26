import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Sidemenu from "./Sidemenu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../redux/adminSlice";
import "./NavbarComponent.css";
import { NavbarBrand } from "react-bootstrap";

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
      <Navbar className="navbar-project">
        <Container className="w-75 mx-auto p-0 nav-container">
          <div className="nav-brands-left">
            <Sidemenu />
            {admin && (
              <div className="d-flex align-items-center">
                <small className="text-center font-quicksand color-red">
                  Logged as: {admin.username}
                </small>
              </div>
            )}
          </div>
          <div>
            <Navbar.Brand>
              <Link to="/" className="text-nabvar-brand">
                Kairos Management Tool
              </Link>
            </Navbar.Brand>
          </div>
          <div className="nav-brands-right">
            {admin && (
              <Link className="btn" to="/login" onClick={handleLogout}>
                <div className="btn-content">Logout</div>
              </Link>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
