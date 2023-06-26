import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TableProducts.css";
import EditProduct from "./EditProduct";
import { useSelector } from "react-redux";

function TableProducts({ products, render, setRender }) {
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
      console.log("product deleted:", response.data);
      setRender(render + 1);
    } catch (error) {
      console.error("Error at product delete request:", error);
    }
  };

  return (
    <table className="border table table-dark table-hover text-center mt-3">
      <thead>
        <tr>
          <th scope="col" className="bg-header">
            id
          </th>
          <th scope="col" className="bg-header">
            brand
          </th>
          <th scope="col" className="bg-header">
            line
          </th>
          <th scope="col" className="bg-header">
            color
          </th>
          <th scope="col" className="bg-header">
            name
          </th>
          <th scope="col" className="bg-header">
            gender
          </th>
          <th scope="col" className="bg-header">
            price
          </th>
          <th scope="col" className="bg-header">
            image
          </th>
          <th scope="col" className="bg-header">
            stock
          </th>
          <th scope="col" className="bg-header">
            trending
          </th>
          <th scope="col" className="bg-header">
            actions
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
              <div className="" style={{ height: "100%" }}>
                <img
                  src={`${import.meta.env.VITE_API_DOMAIN}/img/products/${
                    product.image[0]
                  }`}
                  alt="product-image"
                />
              </div>
            </td>
            <td>{product.stock}</td>
            <td>{product.trending ? "destacado" : "-"}</td>
            <td>
              <EditProduct
                product={product}
                render={render}
                setRender={setRender}
              />
              <img
                src="/img/trash_icon.svg"
                alt="edit icon"
                className="icon"
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
