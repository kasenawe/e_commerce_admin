import "./Sidemenu.css";
import { Link } from "react-router-dom";

function Sidemenu() {
  return (
    <>
      <div className="sidebar" style={{ marginTop: "80px" }}>
        <div className="d-flex flex-column align-items-start mx-5 link-sidebar-zone">
          <Link className="justify-content-start fw-bold btn-nav" to="/">
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
        </div>
      </div>
    </>
  );
}

export default Sidemenu;
