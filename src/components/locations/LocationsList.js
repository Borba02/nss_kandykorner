import React, { useEffect, useState } from "react";

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
        return <h3 key={`location--${locationObj.id}`}>{locationObj.address}</h3>;
      })}
    </>
  );
};

