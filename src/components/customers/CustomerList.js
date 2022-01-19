import React, { useEffect, useState } from "react";
import "./customer.css"

export const CustomerList = () => {
  const [customers, assignCustomers] = useState([]);
  const [totalCustomerMessage, updateMessage] = useState("")
  useEffect(() => {
    fetch("http://localhost:8088/customers")
      .then((res) => res.json())
      .then((customersArray) => {
        assignCustomers(customersArray);
      });
  }, []);

  useEffect(
      () => {
          if (customers.length === 1){
              updateMessage(`You have 1 customer`)
          }
          else {
              updateMessage(`You have ${customers.length} customers`)
          }
      },
      [customers]
  )

  return (
    <>
        <div>{totalCustomerMessage}</div>
      {customers.map((customerObj) => {
        return <p className="customer__list" key={`customer--${customerObj.id}`}>{customerObj.name}</p>;
      })}
    </>
  );
};

