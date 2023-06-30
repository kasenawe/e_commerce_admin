import "./SideMenu.css";
import { Link, useLocation } from "react-router-dom";

function Sideenu() {
  const location = useLocation();
  const currentView = location.pathname; // Obtener la ruta actual

  return (
    <>
      <div className="sidebar">
        <div className="d-flex flex-column align-items-start  link-sidebar-zone">
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <i
                className={` ${
                  currentView === "/"
                    ? "bi bi-house-door fw-bold link-activo-sidebar me-3"
                    : "bi bi-house-door fw-bold text-secondary  me-3"
                }`}
              ></i>
            </div>
            <div>
              <Link
                className={`fw-bold mt-3 btn-nav ${
                  currentView === "/" ? "link-activo-sidebar" : ""
                }`}
                to="/"
              >
                Dashboard
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div>
              <i
                className={` ${
                  currentView === "/admins"
                    ? "bi bi-person-video3 fw-bold link-activo-sidebar me-3"
                    : "bi bi-person-video3 fw-bold text-secondary  me-3"
                }`}
              ></i>
            </div>
            <div>
              <Link
                className={`fw-bold mt-3 btn-nav ${
                  currentView === "/admins" ? "link-activo-sidebar" : ""
                }`}
                to="/admins"
              >
                Admins
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div>
              <i
                className={` ${
                  currentView === "/brands"
                    ? "bi bi-table fw-bold link-activo-sidebar me-3"
                    : "bi bi-table fw-bold text-secondary  me-3"
                }`}
              ></i>
            </div>
            <div>
              <Link
                className={`fw-bold mt-3 btn-nav ${
                  currentView === "/brands" ? "link-activo-sidebar" : ""
                }`}
                to="/brands"
              >
                Brands
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div>
              <i
                className={` ${
                  currentView === "/colors"
                    ? "bi bi-table fw-bold link-activo-sidebar me-3"
                    : "bi bi-table fw-bold text-secondary  me-3"
                }`}
              ></i>
            </div>
            <div>
              <Link
                className={`fw-bold mt-3 btn-nav ${
                  currentView === "/colors" ? "link-activo-sidebar" : ""
                }`}
                to="/colors"
              >
                Colors
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div>
              <i
                className={` ${
                  currentView === "/lines"
                    ? "bi bi-table fw-bold link-activo-sidebar me-3"
                    : "bi bi-table fw-bold text-secondary  me-3"
                }`}
              ></i>
            </div>
            <div>
              <Link
                className={`fw-bold mt-3 btn-nav ${
                  currentView === "/lines" ? "link-activo-sidebar" : ""
                }`}
                to="/lines"
              >
                Lines
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-4">
            <div>
              <i
                className={` ${
                  currentView === "/products"
                    ? "bi bi-table fw-bold link-activo-sidebar me-3"
                    : "bi bi-table fw-bold text-secondary  me-3"
                }`}
              ></i>
            </div>
            <div>
              <Link
                className={`fw-bold mt-3 btn-nav ${
                  currentView === "/products" ? "link-activo-sidebar" : ""
                }`}
                to="/products"
              >
                Products
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div>
              <i
                className={` ${
                  currentView === "/users"
                    ? "bi bi-table fw-bold link-activo-sidebar me-3"
                    : "bi bi-table fw-bold text-secondary  me-3"
                }`}
              ></i>
            </div>
            <div>
              <Link
                className={`fw-bold mt-3 btn-nav ${
                  currentView === "/users" ? "link-activo-sidebar" : ""
                }`}
                to="/users"
              >
                Users
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidemenu;
