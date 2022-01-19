import React, { useEffect, useState } from "react";
import './products.css'

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
        return <div key={`product--${productObj.id}`} className="productsList">
            <h3>{productObj.productName} </h3> 
            <h5>Category</h5>
            <p className="productListObj">{productObj.productType.id}) {productObj.productType.typeName}</p>
            <h5>Price:</h5>
            <p className="productListObj">{productObj.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}/ea</p>
        
        </div>;
      })}
    </>
  );
};