import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import axios from "axios";

function EditAdmin({ adminRow, render, setRender }) {
  const admin = useSelector((state) => state.admin);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [usernameValue, setUsername] = useState(adminRow.username);
  const [passwordValue, setPassword] = useState("");
  const [firstnameValue, setFirstname] = useState(adminRow.firstname);
  const [lastnameValue, setLastname] = useState(adminRow.lastname);

  const handleEditAdmin = async (event) => {
    event.preventDefault();
    await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_DOMAIN}api/admin/${adminRow.username}`,
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
        <Modal.Header closeButton closeVariant="white" className="bg-dark">
          <Modal.Title>Edit Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
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
