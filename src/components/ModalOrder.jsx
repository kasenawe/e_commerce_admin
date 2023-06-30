import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ModalOrder.css";

function ModalOrder({ products, order, setRender, render }) {
  const loggedAdmin = useSelector((state) => state.admin);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const notifyError = () =>
    toast.error("Out of the scope of the project", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const handleOnClick = () => {
    notifyError();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      method: "PATCH",
      url: `${import.meta.env.VITE_API_DOMAIN}api/admin/order/${order.id}`,
      data: { status },
      headers: {
        Authorization: `Bearer ${loggedAdmin.token}`,
      },
    });
    setRender(render + 1);
    return handleClose();
  };

  return (
    <>
      <span className="view-order" onClick={handleShow}>
        View order
      </span>

      <Modal show={show} onHide={handleClose} size={"xl"}>
        <Modal.Header closeButton closeVariant={"white"} className="modal-bg">
          <Modal.Title>Order ID: {order.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-bg">
          <div className="d-flex justify-content-between mb-3">
            <div className="d-flex flex-column">
              <span>Fullname: {order.fullname}</span>
              <span>Address: {order.address}</span>
            </div>
            <div className="d-flex flex-column">
              <span>Email: {order.email}</span>
              <span>Phone: {order.phone}</span>
            </div>
          </div>

          <table className="table table-dark table-hover text-center mt-4">
            <thead>
              <tr>
                <th scope="col" className="bg-header">
                  ID
                </th>
                <th scope="col" className="bg-header">
                  Product
                </th>
                <th scope="col" className="bg-header">
                  Color
                </th>
                <th scope="col" className="bg-header">
                  Gender
                </th>
                <th scope="col" className="bg-header">
                  Quantity
                </th>
                <th scope="col" className="bg-header">
                  Unit price
                </th>
                <th scope="col" className="bg-header">
                  Total price
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td scope="row">{product.id}</td>
                  <td>
                    {product.brand}-{product.line}-{product.name}
                  </td>
                  <td>
                    {product.color.map((color, i) => (
                      <span key={i}>{color}, </span>
                    ))}
                  </td>

                  <td>{product.gender}</td>
                  <td>{product.qty}</td>
                  <td>USD {product.price}</td>
                  <td>USD {product.price * product.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between fs-4 ">
            <div className="w-25">
              <Form>
                <p className="fs-6 my-1">Update status:</p>
                <Form.Select
                  className="rounded-0"
                  aria-label="Default select example"
                  onChange={(event) => setStatus(event.target.value)}
                  value={status}
                >
                  <option value="Pending">Pending</option>
                  <option value="UnPaid">UnPaid</option>
                  <option value="Sent">Sent</option>
                  <option value="Delivered">Delivered</option>
                </Form.Select>
              </Form>
            </div>
            <p className="my-auto">Total: USD {order.totalPrice}</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-bg">
          <div className="btn float-end my-3" onClick={handleClose}>
            <div className="btn-content">Close</div>
          </div>
          <div className="btn float-end my-3" onClick={handleOnClick}>
            <div className="btn-content">Print</div>
          </div>
          <div className="btn float-end my-3" onClick={handleSubmit}>
            <div className="btn-content">Save Changes</div>
          </div>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default ModalOrder;
