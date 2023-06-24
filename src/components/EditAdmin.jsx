import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import axios from "axios";

function EditAdmin({ username }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const admin = useSelector((state) => state.admin);
  const adminId = admin.id;

  //corregir esto
  const [usernameValue, setUsername] = useState(admin.username);
  const [passwordValue, setPassword] = useState("");
  const [firstnameValue, setFirstname] = useState(admin.username);
  const [lastnameValue, setLastname] = useState(admin.lastname);

  const handleEditAdmin = async (event) => {
    event.preventDefault();
    await axios({
      method: "UPDATE",
      url: `${import.meta.env.VITE_API_DOMAIN}/api/${admin.username}`,
      data: {
        firstname: firstnameValue,
        lastname: lastnameValue,
        username: usernameValue,
        password: passwordValue,
        role_code: "100",
      },
    });

    handleClose();
    navigate("/admins");
  };

  return (
    <>
      <img
        src="/img/edit_icon.svg"
        alt="edit icon"
        className="icon"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(event) => handleEditAdmin(event)}>
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

export default EditAdmin;
