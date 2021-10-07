
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand >Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="text-white m-2" to="/home">Home</NavLink>
                    <NavLink className="text-white m-2" to="/todo">Todo List</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;