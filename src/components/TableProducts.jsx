import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TableProducts.css";
import EditProduct from "./EditProduct";
import { useSelector } from "react-redux";

function TableProducts({ products, render, setRender }) {
  console.log(products);
  const loggedAdmin = useSelector((state) => state.admin);

  const handleDelete = async (product) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_API_DOMAIN}/api/admin/product/${
          product.id
        }`,
        headers: {
          Authorization: `Bearer ${loggedAdmin.token}`,
        },
      });
      setRender(render + 1);
    } catch (error) {
      console.error("Error at product delete request:", error);
    }
  };

  return (
    <table className="table table-dark table-hover text-center">
      <thead>
        <tr>
          <th scope="col" className="bg-header">
            Id
          </th>
          <th scope="col" className="bg-header">
            Brand
          </th>
          <th scope="col" className="bg-header">
            Line
          </th>
          <th scope="col" className="bg-header">
            Color
          </th>
          <th scope="col" className="bg-header">
            Name
          </th>
          <th scope="col" className="bg-header">
            Gender
          </th>
          <th scope="col" className="bg-header">
            Price
          </th>
          <th scope="col" className="bg-header">
            Image
          </th>
          <th scope="col" className="bg-header">
            Stock
          </th>
          <th scope="col" className="bg-header">
            Featured
          </th>
          <th scope="col" className="bg-header">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.brand.name}</td>
            <td>{product.line.name}</td>
            <td>
              {product.color.map((color, index) => (
                <span key={index}>{color.name}, </span>
              ))}
            </td>
            <td>{product.name}</td>
            <td>{product.gender}</td>
            <td>{product.price}</td>
            <td>
              <img
                //src={`${import.meta.env.SUPABASE_DB_URL}${product.image[0]}`}
                src={
                  import.meta.env.VITE_SUPABASE_PRODUCTS_IMG_URL +
                  product.image[0]
                }
                className="img"
                alt="product-image"
              />
            </td>
            <td>{product.stock}</td>
            <td>{product.trending ? "Yes" : "No"}</td>
            <td>
              <EditProduct
                product={product}
                render={render}
                setRender={setRender}
              />
              <img
                src="/img/trash_icon.svg"
                alt="edit icon"
                className="icon ms-4"
                onClick={() => handleDelete(product)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TableProducts;
