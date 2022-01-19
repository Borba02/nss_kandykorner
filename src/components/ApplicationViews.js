import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./locations/LocationsList"
import { ProductList } from "./products/ProductList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { CustomerList } from "./customers/CustomerList"

export const ApplicationViews = () => {
   return (
    <>
    <Route exact path="/locations">
        <LocationList />
    </Route>
    <Route exact path="/products">
        <ProductList />
    </Route>
    <Route exact path="/employees">
        <EmployeeList />
    </Route>
    <Route path="/employees/hiring">
                 <EmployeeForm />
    </Route>
    <Route exact path="/customers">
        <CustomerList />
    </Route>
    </>
    )
}