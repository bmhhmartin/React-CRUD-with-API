import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
            <Navbar expand="md">
                <Container>
                    <Navbar.Brand href="/">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}

export default Navigation;
