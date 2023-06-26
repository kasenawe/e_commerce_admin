import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function CreateAdmin({ render, setRender }) {
  const admin = useSelector((state) => state.admin);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [usernameValue, setUsername] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [firstnameValue, setFirstname] = useState("");
  const [lastnameValue, setLastname] = useState("");

  async function handleCreateAdmin(event) {
    event.preventDefault();
    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_DOMAIN}/api/admin`,
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

    handleClose();
    setRender(render + 1);
  }
  return (
    <>
      <div className="btn float-end my-3" onClick={handleShow}>
        <div className="btn-content"> New Admin</div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
    </>
  );
}

export default CreateAdmin;
