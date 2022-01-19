import React, { useEffect, useState } from "react";
import './locations.css'

export const LocationList = () => {
  const [locations, assignLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/locations")
      .then((res) => res.json())
      .then((locationArray) => {
        assignLocations(locationArray);
      });
  }, []);

  return (
    <>
        
      {locations.slice(0,5).map((locationObj) => {
        return <p className="locations__list" key={`location--${locationObj.id}`}>{locationObj.address}</p>;
      })}
    </>
  );
};

