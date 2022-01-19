import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import './employee.css'
export const EmployeeList = () => {
    const [employees, setEmployee] = useState([])
    const history = useHistory()
    useEffect(() => {
        fetch("http://localhost:8088/employees?_expand=location")
        .then((res) => res.json())
        .then((employeeArray) => {
            setEmployee(employeeArray)
        })
    }, [])


    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/hiring")}>Add Employee </button>
            </div>
            <div className="employees__list">
                {employees.map((employeeObj) => {
                    return <p key={`employee--${employeeObj.id}`} className={`employee--${employeeObj.id} ${employeeObj.management ? `management` : ``}`}> 
                        -{employeeObj.management ? "Manager-" : ""} {employeeObj.name} <br /> Location: {employeeObj.location.address} <br /> Employment Type: {employeeObj.fulltime ? "Full Time" : "Part Time"}
                    </p>
                })}
                
            </div>
        </>
    )

        
    
}