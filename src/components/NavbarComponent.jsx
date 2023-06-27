import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Sidemenu from "./Sidemenu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../redux/adminSlice";
import "./NavbarComponent.css";

function NavbarComponent() {
  const admin = useSelector((state) => state.admin);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogout() {
    dispatch(removeToken());
    navigate("/login");
  }
  return (
    <Navbar>
      <Container>
        <div>
          <div className="d-flex align-items-center">
            <small className=" font-quicksand color-red">
              {admin ? "Logged as:" + admin.username : "Not logged in"}
            </small>
          </div>
        </div>
        <div>KRONOS ADMIN</div>
        <div className="">
          {admin && (
            <Link className="btn" to="/login" onClick={handleLogout}>
              <div className="btn-content">Logout</div>
            </Link>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
