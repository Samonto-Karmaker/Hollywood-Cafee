import React from "react";
import { Navbar } from "reactstrap";
import { NavbarBrand } from "reactstrap";

const Navigation = () => {
    return(
        <div>
            <Navbar light color="dark">
                <div className="container">
                    <NavbarBrand href="/">Hollywood Cafee</NavbarBrand>
                </div>
            </Navbar>
        </div>
    )
}

export default Navigation