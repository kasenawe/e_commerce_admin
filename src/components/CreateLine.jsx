import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateLine({ render, setRender }) {
  const admin = useSelector((state) => state.admin);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [brands, setBrands] = useState([]);

  const [brandValue, setBrand] = useState("");
  const [nameValue, setName] = useState("");
  const [descriptionValue, setDescription] = useState("");
  const [imagesValue, setImages] = useState([]);

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

  const notifyAdd = () =>
    toast.success(`Line Created`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleCreateLine = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("brand", brandValue);
    formData.append("name", nameValue);
    formData.append("description", descriptionValue);
    for (let i = 0; i < imagesValue.length; i++) {
      formData.append("images", imagesValue[i]);
    }
    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_DOMAIN}/api/admin/line`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + admin.token,
      },
    });
    notifyAdd();
    setRender(render + 1);
    handleClose();
  };

  return (
    <>
      <div className="btn float-end my-3" onClick={handleShow}>
        <div className="btn-content">New Line</div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton closeVariant="white" className="bg-dark">
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form onSubmit={(event) => handleCreateLine(event)}>
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

            <Form.Label htmlFor="name">Name</Form.Label>
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
              <div className="btn float-end my-3" onClick={handleClose}>
                <div className="btn-content">Close</div>
              </div>
              <div
                type="submit"
                className="btn float-end my-3"
                onClick={handleCreateLine}
              >
                <div className="btn-content">Save Changes</div>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default CreateLine;
