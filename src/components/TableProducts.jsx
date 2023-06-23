import React from "react";
import "./TableProducts.css";

function TableProducts({ products }) {
  return (
    <table className="border table table-dark table-hover text-center mt-3">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">brand</th>
          <th scope="col">line</th>
          <th scope="col">color</th>
          <th scope="col">name</th>
          <th scope="col">gender</th>
          <th scope="col">price</th>
          <th scope="col">image</th>
          <th scope="col">stock</th>
          <th scope="col">trending</th>
          {/* <th scope="col">description</th> */}
          {/* <th scope="col">slug</th> */}
          {/* <th scope="col">createdAt</th>
          <th scope="col">updatedAt</th> */}
          <th scope="col">actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr>
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
            {/* <td>{product.description}</td> */}
            {/* <td>{product.slug}</td>
            <td> {product.createdAt}</td>
            <td>{product.updatedAt}</td> */}
            <td>
              <img src="/img/edit_icon.svg" alt="edit icon" className="icon" />
              <img src="/img/trash_icon.svg" alt="edit icon" className="icon" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default TableProducts;
