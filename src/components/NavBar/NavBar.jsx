import React from 'react'
import './NavBar.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
// import { Nav } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom'
// import { NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../images/logo.ico'

export default function NavBar() {
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand className="logo" as={Link} to="/">
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link 
                            as={NavLink}
                            to="/"
                            activeClassName="selected"
                            exact
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/About"
                            activeClassName="selected"
                            exact
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/Adopt"
                            activeClassName="selected"
                            exact
                        >
                            Adopt
                        </Nav.Link>
                        <NavDropdown className="drop" title="Resources">
                            <NavDropdown.Item
                                as={NavLink}
                                activeClassName="selected"
                                exact
                                to="/Cat"
                            >
                                Cat
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={NavLink}
                                activeClassName="selected"
                                exact
                                to="/Dog"
                            >
                                Dog
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            as={NavLink}
                            activeClassName="selected"
                            exact
                            to="/Contactus"
                        >
                            Contact Us
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            activeClassName="selected"
                            exact
                            to="/Login"
                        >
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
