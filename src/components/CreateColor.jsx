import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateColor() {
  const admin = useSelector((state) => state.admin);
  const [show, setShow] = useState(false);

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

  return (
    <>
      <div className=" w-100 mb-2" onClick={handleOnClick}>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <h5 className="p-0 m-0">Color List</h5>
          <div>
            <i
              className="bi bi-plus-square-fill fs-2 me-3 btn-hover"
              type="button"
            ></i>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default CreateColor;
