import React, { useEffect, useState } from "react";

export const ProductList = () => {
  const [products, updateProducts] = useState([])
  useEffect(() => {
    fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
      .then((res) => res.json())
      .then((ProductArray) => {
        updateProducts(ProductArray);
      });
  }, []);

  return (
    <>
      {products.map((productObj) => {
        return <div key={`product--${productObj.id}`}>
            <h3>{productObj.productName} </h3> 
            <p>{productObj.productType.id}) {productObj.productType.typeName}</p>
            <p>at {productObj.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
        
        </div>;
      })}
    </>
  );
};