import React, { useEffect, useState } from "react";
import TableProducts from "../components/TableProducts";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CreateProduct from "../components/CreateProduct";
import NavbarComponent from "../components/NavbarComponent";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_DOMAIN}/products`
      );
      setProducts(response.data);
      console.log(response.data);
    };

    getProducts();
  }, []);

  return (
    <>
      <NavbarComponent />
      <div className="text-center">
        <h1 className="mt-2">Products</h1>
        <CreateProduct />
        <TableProducts products={products} />
      </div>
    </>
  );
}

export default Products;
