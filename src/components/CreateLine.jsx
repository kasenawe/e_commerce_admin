import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function CreateLine() {
  const admin = useSelector((state) => state.admin);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="btn float-end my-3" onClick={handleShow}>
        <div className="btn-content">New Line</div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control type="text" id="username" />
            <Form.Label htmlFor="firstname">Firstname</Form.Label>
            <Form.Control type="text" id="firstname" />
            <Form.Label htmlFor="lastname">Lastname</Form.Label>
            <Form.Control type="text" id="lastname" />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control type="password" id="password" />
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

export default CreateLine;
