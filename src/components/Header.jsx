import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";
const Header = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand className="navBtn">Home</Navbar.Brand>
                </NavLink>

                <Nav className="me-auto">
                    <NavLink to="/add">
                        <Navbar.Brand className="navBtn">Add</Navbar.Brand>
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
