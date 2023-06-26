import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function EditProduct({ product }) {
  const [show, setShow] = useState(false);
  const [brands, setBrands] = useState([]);
  const [lines, setLines] = useState([]);
  const [colors, setColors] = useState([]);
  const [filterLine, setFilterLine] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
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
  }, [filterLine]);

  useEffect(() => {
    const getLines = async () => {
      const response = await axios({
        method: "GET",
        url: `${
          import.meta.env.VITE_API_DOMAIN
        }/lines?filterBrand=${filterLine}`,
      });
      setLines(response.data);
    };
    getLines();
  }, [filterLine]);

  useEffect(() => {
    const getColors = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/colors`,
      });
      setColors(response.data);
    };
    getColors();
  }, []);

  const navigate = useNavigate();
  console.log(product);
  const [line, setLine] = useState(product.line.name);
  const [brand, setBrand] = useState(product.brand.name);
  const [color, setColor] = useState(product.color.name);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [gender, setGender] = useState(product.gender);
  const [price, setPrice] = useState(product.price);
  const [trending, setTrending] = useState(product.trending);
  const [image, setImage] = useState([]);

  const handleFilterLine = (event) => {
    setBrand(event.target.value);
    setFilterLine(event.target.value);
  };

  const handleImage = (event) => {
    const productImage = event.target.files[0];
    setImage(productImage);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("brand", brand);
    formData.append("line", line);
    formData.append("color", color);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("gender", gender);
    formData.append("price", price);
    formData.append("trending", trending);
    formData.append("image", image);
    formData.append("stock", 50);

    await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_DOMAIN}/api/admin/product/${product.id}`,
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    handleClose();
    return console.log("El producto se ha editado correctamente!");
  }

  return (
    <>
      <img
        src="/img/edit_icon.svg"
        alt="edit icon"
        className="icon"
        onClick={handleShow}
      />
      {product && (
        <Modal show={show} onHide={handleClose} className="modal-xl">
          <Modal.Header closeButton className="bg-dark">
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark">
            <Form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6">
                  <Form.Group>
                    <Form.Label htmlFor="brand" className="ms-2 my-1">
                      Brand
                    </Form.Label>
                    <Form.Select
                      onChange={handleFilterLine}
                      aria-label="Default select example"
                      className="filter-selector"
                      name="brand"
                      value={brand}
                      required={true}
                    >
                      <option
                        key={product.brand._id}
                        value={product.brand.slug}
                      >
                        {product.brand.name}
                      </option>
                      {brands
                        .filter(
                          (brandOption) =>
                            brandOption.name !== product.brand.name
                        )
                        .map((brandOption) => (
                          <option
                            key={brandOption._id}
                            value={brandOption.slug}
                          >
                            {brandOption.name}
                          </option>
                        ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor="line" className="ms-2 my-1">
                      Line
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="filter-selector"
                      name="line"
                      value={line}
                      onChange={(event) => setLine(event.target.value)}
                      required={true}
                    >
                      <option key={product.line._id} value={product.line.slug}>
                        {product.line.name}
                      </option>
                      {lines
                        .filter(
                          (lineOption) => lineOption.name !== product.line.name
                        )
                        .map((lineOption) => (
                          <option key={lineOption._id} value={lineOption.slug}>
                            {lineOption.name}
                          </option>
                        ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor="color" className="ms-2 my-1">
                      Color
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="filter-selector"
                      name="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      required={true}
                      disabled={true}
                    >
                      <option
                        key={product.color._id}
                        value={product.color.name}
                      >
                        {`${product.color.map((color) => color.name)} ,`}
                      </option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label
                      htmlFor="name"
                      className="ms-2 my-1"
                      value={name}
                    >
                      Product name
                    </Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required={true}
                    />
                  </Form.Group>
                </div>

                <div className="col-12 col-sm-12 col-md-6">
                  <Form.Group>
                    <Form.Label
                      htmlFor="gender"
                      className="ms-2 my-1"
                      value={gender}
                      required={true}
                    >
                      Gender
                    </Form.Label>
                    <Form.Select
                      name="gender"
                      aria-label="Default select example"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required={true}
                    >
                      <option value=""></option>
                      <option value="Man">man</option>
                      <option value="Woman">woman</option>
                      <option value="Unisex">unisex</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="price" className="ms-2 my-1">
                      Price
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required={true}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="trending" className="ms-2 my-1">
                      Trending
                    </Form.Label>
                    <Form.Select
                      name="trending"
                      aria-label="Default select example"
                      value={trending}
                      onChange={(e) => setTrending(e.target.value)}
                      required={true}
                    >
                      <option value=""></option>
                      <option value="false">No</option>
                      <option value="true">Yes</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="image" className="ms-2 my-1">
                      Product image
                    </Form.Label>
                    <Form.Control
                      id="image"
                      name="image"
                      type="file"
                      onChange={handleImage}
                      required={true}
                    />
                  </Form.Group>
                </div>
                <div className="col-12">
                  <Form.Group>
                    <Form.Label htmlFor="description" className="ms-2 my-1">
                      Product description
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      required={true}
                    />
                  </Form.Group>
                </div>
              </div>

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
      )}
    </>
  );
}

export default EditProduct;
