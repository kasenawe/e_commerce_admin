import React, { useEffect, useState } from "react";
import TableProducts from "../components/TableProducts";
import axios from "axios";
import CreateProduct from "../components/CreateProduct";

function Products() {
  const [products, setProducts] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_DOMAIN}/products`
      );
      setProducts(response.data);
    };

    getProducts();
  }, [render]);

  return (
    <>
      <div className="text-center margin5">
        <h1 className="mt-2 family-pinyon">Products</h1>
        <CreateProduct render={render} setRender={setRender} />
        <TableProducts
          products={products}
          render={render}
          setRender={setRender}
        />
      </div>
    </>
  );
}

export default Products;
