import React from "react";
import { useProductContext } from "../contextApi/contextApi.jsx";
import "./product.css";

const Product = () => {
  const products = useProductContext();

  return (
    <div className="mainbody">
      <div className="contain">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="list">
              <img src={product.thumbnail} alt={product.title} />
              <h2>{product.title}</h2>
              <p>Price: ${product.price} (Discount: {product.discountPercentage}%)</p>
              <p>Rating: {product.rating} / 5</p>
              <p>Stock: {product.stock}</p>
              <p>Brand: {product.brand}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Product;
