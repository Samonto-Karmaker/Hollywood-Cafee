import React, {Component} from "react";
import { Navbar } from "reactstrap";
import { NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { Link } from "react-router-dom";

class Navigation extends Component{
    state = {
        isNavOpen: false
    }

    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render(){
        return(
            <div>
                <Navbar dark color="dark" expand = "sm">
                    <div className="container">
                    <NavbarToggler onClick={this.navToggle}/>
                        <NavbarBrand href="/" style={{fontSize: "50px", fontFamily: "fantasy"}}>Hollywood Cafee</NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link to = "/" className="nav-link active">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to = "/menu" className="nav-link">Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to = "/about" className="nav-link">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to = "/contact" className="nav-link">Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Navigation