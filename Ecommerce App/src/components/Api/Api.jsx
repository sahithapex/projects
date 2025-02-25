import React, { useEffect, useState } from "react";

const Api = () => {
  const [product, setProduct] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json(); 
        setProduct(data.products); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {product.map((item) => (
          <li key={item.id}>{item.title}</li> 
        ))}
      </ul>
      <h1>Hi Sahith</h1>
    </div>
  );
};

export default Api;
