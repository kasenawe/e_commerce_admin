import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateAdmin({ render, setRender }) {
  const admin = useSelector((state) => state.admin);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [usernameValue, setUsername] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [firstnameValue, setFirstname] = useState("");
  const [lastnameValue, setLastname] = useState("");

  const notifyAdd = () =>
    toast.success(`Admin ${usernameValue} created`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  async function handleCreateAdmin(event) {
    event.preventDefault();
    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_DOMAIN}api/admin`,
      data: {
        firstname: firstnameValue,
        lastname: lastnameValue,
        username: usernameValue,
        password: passwordValue,
        role_code: "100",
      },
      headers: {
        Authorization: `Bearer ${admin.token}`,
      },
    });
    notifyAdd();
    handleClose();
    setRender(render + 1);
  }
  return (
    <>
      <div className=" w-100 mb-2" onClick={handleShow}>
        <div className="d-flex  justify-content-between align-items-center">
          <h5 className="p-0 m-0">Admins</h5>
          <div className="btn">
            <div className="btn-content">New Product</div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title>Create Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form onSubmit={handleCreateAdmin}>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              id="username"
              value={usernameValue}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Form.Label htmlFor="firstname">Firstname</Form.Label>
            <Form.Control
              type="text"
              id="firstname"
              value={firstnameValue}
              onChange={(event) => setFirstname(event.target.value)}
            />
            <Form.Label htmlFor="lastname">Lastname</Form.Label>
            <Form.Control
              type="text"
              id="lastname"
              value={lastnameValue}
              onChange={(event) => setLastname(event.target.value)}
            />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              value={passwordValue}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="d-flex gap-2 mt-3 justify-content-end">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default CreateAdmin;
