import React from "react";
import TableUsers from "../components/TableUsers";
import { useSelector } from "react-redux/es";
import { Container, Row, Col } from "react-bootstrap";
import Sidemenu from "../components/Sidemenu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Users() {
  const admin = useSelector((state) => state.admin);

  const notifyError = () =>
    toast.error("Out of the scope of the project", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleOnClick = () => {
    notifyError();
  };
  return (
    <Container fluid>
      <Row>
        {admin && (
          <Col xs={12} md={2} lg={2}>
            <Sidemenu />
          </Col>
        )}
        <Col xs={12} md={10} lg={10}>
          <div className=" w-100 mb-2" onClick={handleOnClick}>
            <div className="d-flex  justify-content-between align-items-center">
              <h5 className="p-0 m-0">Users</h5>
              <div className="btn">
                <div className="btn-content">New User</div>
              </div>
            </div>
          </div>
          <TableUsers />
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
}

export default Users;
