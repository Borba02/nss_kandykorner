import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
  const [employee, addEmployee] = useState({
    name: "",
    locationId: 1,
    management: false,
    fulltime: false,
    hourlyRate: 1,
  });

  const [locationChoices, setLocationChoice] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/locations")
      .then((res) => res.json())
      .then((locations) => {
        setLocationChoice(locations);
      });
  }, []);

  const history = useHistory();

  const saveEmployee = (evt) => {
    evt.preventDefault();

    const newEmployee = {
      name: employee.name,
      locationId: employee.locationId,
      management: employee.management,
      fulltime: employee.fulltime,
      hourlyRate: employee.hourlyRate,
    };

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    };

    return fetch(
      "http://localhost:8088/employees?_expand=location",
      fetchOption
    ).then(() => history.push("/employees"));
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">Add New Employee</h2>
      
{/* New Employee Name */}

      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            placeholder="Employee's Name"
            onChange={(evt) => {
              const copy = { ...employee };
              copy.name = evt.target.value;
              addEmployee(copy);
            }}
          />
        </div>
      </fieldset>

{/* New Employee Location */}

      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <select
            onChange={(evt) => {
              const copy = { ...employee };
              copy.locationId = parseInt(evt.target.value);
              addEmployee(copy);
            }}
          >
            <option value="">Choose a Store</option>
            {locationChoices.map((locationObject) => {
              return (
                <option key={`${locationObject.id}`} value={locationObject.id}>
                  {locationObject.address}
                </option>
              );
            })}
          </select>
        </div><br />

{/* New Employee Management Status */}

        <div className="form-group">
                <label htmlFor="manager">Manager:</label>
                <input type="checkbox"
                    onChange={
                        (evt)  => {
                            const copy = {...employee}
                            copy.management = evt.target.checked
                            addEmployee(copy)
                        }
                    } />
            </div>
      </fieldset>

{/* New Employee Full or Part Time Status */}

      <fieldset>
            <div className="form-group">
                <label htmlFor="Full Time">Full Time:</label>
                <input type="checkbox"
                    onChange={
                        (evt)  => {
                            const copy = {...employee}
                            copy.fulltime = evt.target.checked
                            addEmployee(copy)
                        }
                    } />
            </div>

{/* New Employee Hourly Rate  */}

            <div className="form-group">
                <label htmlFor="Hourly Rate">Hourly Rate</label>
                <input
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.hourlyRate = evt.target.value
                            addEmployee(copy)
                        }
                    }
                    required autoFocus
                    type="number"
                    className="form-control"
                    placeholder="Hourly Rate"
                     />
            </div>
        </fieldset>
      <button className="btn btn-primary" onClick={saveEmployee}>
        Submit New Employee
      </button>
    </form>
  );
};
