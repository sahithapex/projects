import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) {
    return <p>No product details available.</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
