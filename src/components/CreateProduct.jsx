import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";

function CreateProduct(render, setRender) {
  const loggedAdmin = useSelector((state) => state.admin);
  const [show, setShow] = useState(false);
  const [brands, setBrands] = useState([]);
  const [lines, setLines] = useState([]);
  const [filterLine, setFilterLine] = useState([]);
  const [newColors, setNewColors] = useState([]);
  const [newColorsNames, setNewColorsNames] = useState([]);
  const [allColors, setAllColors] = useState([]);
  const [tempColors, setTempColors] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/brands`,
        headers: {
          Authorization: `Bearer ${loggedAdmin.token}`,
        },
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
        headers: {
          Authorization: `Bearer ${loggedAdmin.token}`,
        },
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
        headers: {
          Authorization: `Bearer ${loggedAdmin.token}`,
        },
      });
      setAllColors(response.data);
      setTempColors(response.data);
    };
    getColors();
  }, []);

  const handleFilterLine = (event) => {
    setBrand(event.target.value);
    setFilterLine(event.target.value);
  };

  const [line, setLine] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");
  const [trending, setTrending] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (event) => {
    const productImage = event.target.files[0];
    setImage(productImage);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      brand: brand,
      line: line,
      color: newColors,
      name: name,
      description: description,
      gender: gender,
      price: price,
      trending: trending,
      image: image,
      stock: 50,
    };

    await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_DOMAIN}/api/admin/product`,
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${loggedAdmin.token}`,
      },
    });

    setRender(render + 1);
    handleClose();
    return console.log("El producto se ha creado correctamente!");
  }

  const handleChange = (e) => {
    setNewColors([...newColors, e.target.value]);
    setNewColorsNames([
      ...newColorsNames,
      tempColors.find((item) => item.id === e.target.value).name,
    ]);
    setTempColors(tempColors.filter((color) => color.id !== e.target.value));
  };

  const handleRemove = (colorName) => {
    const selectedColor = allColors.find((color) => color.name === colorName);
    setNewColors(newColors.filter((colorId) => colorId !== selectedColor.id));
    setNewColorsNames(
      newColorsNames.filter((colorName) => colorName !== selectedColor.name)
    );
    setTempColors([
      ...tempColors,
      { id: selectedColor.id, name: selectedColor.name },
    ]);
  };

  return (
    <>
      <div className="btn float-end my-3" onClick={handleShow}>
        <div className="btn-content">New Product</div>
      </div>
      <Modal show={show} onHide={handleClose} className="modal-xl">
        <Modal.Header closeButton closeVariant="white" className="bg-dark">
          <Modal.Title>Modal heading</Modal.Title>
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
                    <option value=""></option>
                    {brands.map((brand) => (
                      <option key={brand._id} value={brand.slug}>
                        {brand.name}
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
                    <option value=""></option>
                    {lines.map((line) => (
                      <option key={line._id} value={line.slug}>
                        {line.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group action="">
                  <div className="shadow rounded mt-4 ms-2 mb-2">
                    {newColorsNames.length > 0
                      ? newColorsNames.map((color) => (
                          <span
                            key={color}
                            style={{
                              backgroundColor: allColors.find(
                                (item) => item.name === color
                              ).colorCode,
                              color: "#383838",
                            }}
                            className="me-2 p-2 rounded shadow"
                            onClick={() => handleRemove(color)}
                          >
                            {color} <sup className="ms-1 fw-bold">X</sup>
                          </span>
                        ))
                      : "S/C"}
                  </div>

                  <Form.Label htmlFor="line" className="ms-2 my-1">
                    Colors
                  </Form.Label>
                  <Form.Select
                    name="color"
                    id="color"
                    onInput={handleChange}
                    required={true}
                  >
                    <option>Seleccionar color...</option>
                    {tempColors.map((color) => (
                      <option key={color.id} value={color.id}>
                        {color.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="name" className="ms-2 my-1">
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
    </>
  );
}

export default CreateProduct;
