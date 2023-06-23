import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function FormProduct() {
  const [show, setShow] = useState(false);
  const [brands, setBrands] = useState([]);
  const [lines, setLines] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditAdmin = () => {
    handleClose;
  };

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/brands`,
      });
      setBrands(response.data);
    };

    getBrands();
  }, []);

  useEffect(() => {
    const slug = brands;

    const getLines = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/lines`,
      });
      setLines(response.data);
    };
    getLines();
  }, [brands]);

  return (
    <>
      <Button
        variant="primary"
        className="float-end adminButton mb-2"
        onClick={handleShow}
      >
        New Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditAdmin}>
            <Form.Group>
              <Form.Select
                aria-label="Default select example"
                className="filter-selector"
              >
                {brands.map((brand) => (
                  <option key={brand._id} value={brand.slug}>
                    {brand.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

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

export default FormProduct;
