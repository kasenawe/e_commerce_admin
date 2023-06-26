import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditLine({ line, render, setRender }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [brands, setBrands] = useState([]);
  const [nameValue, setName] = useState(line.name);
  const [brandValue, setBrand] = useState(line.brand.name);
  const [descriptionValue, setDescription] = useState(line.description);
  const [imagesValue, setImages] = useState(line.images || []);

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/brands`,
      });
      setBrands(response.data);
    };
    getBrands();
  }, [render]);

  const handleEditLine = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", nameValue);
    formData.append("brand", brandValue);
    formData.append("description", descriptionValue);

    for (let i = 0; i < imagesValue.length; i++) {
      formData.append("images", imagesValue[i]);
    }

    await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_DOMAIN}/api/admin/line/${line.id}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });

    setRender(render + 1);
    handleClose();
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
          <Form onSubmit={(event) => handleEditLine(event)}>
            <Form.Label htmlFor="brand">Brand</Form.Label>

            <Form.Select
              aria-label="Default select example"
              value={brandValue}
              onChange={(event) => setBrand(event.target.value)}
            >
              <option>Select Brand...</option>
              {brands.length > 0 &&
                brands.map((brand) => (
                  <option key={brand.id}>{brand.name}</option>
                ))}
            </Form.Select>

            <Form.Label htmlFor="firstname">Name</Form.Label>
            <Form.Control
              type="text"
              id="name"
              placeholder="Line name"
              value={nameValue}
              onChange={(event) => setName(event.target.value)}
            />
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              as="textarea"
              id="description"
              placeholder="Description..."
              value={descriptionValue}
              onChange={(event) => setDescription(event.target.value)}
            />
            <Form.Label htmlFor="images">Images</Form.Label>
            <Form.Control
              type="file"
              id="images"
              onChange={(event) => setImages(event.target.files)}
            />
            <div className="d-flex"></div>
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

export default EditLine;
