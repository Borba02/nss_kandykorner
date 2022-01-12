import React from "react"
import { LocationList } from "./locations/LocationsList"
import { ProductList } from "./products/ProductList";

export const KandyKorner = () => {
    return (
      <>
        <h1>KandyKorner</h1>
  
        <h2>Locations</h2>
          <LocationList />

        <h2>Inventory</h2>
          <ProductList />
  
        
      </>
    );
  };