import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateBrand() {
  const admin = useSelector((state) => state.admin);
  const [show, setShow] = useState(false);

  const notifyAdd = () =>
    toast.success("Brand created", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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
      <div className="btn float-end my-3" onClick={handleOnClick}>
        <div className="btn-content">New Brand</div>
      </div>

      <ToastContainer />
    </>
  );
}

export default CreateBrand;
