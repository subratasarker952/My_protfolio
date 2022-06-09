import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"> Subrata Sarker</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link as={Link} className="text-light" to="/">Home</Nav.Link>
                            <Nav.Link as={Link} className="text-light" to="/project">Project</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} className="text-light" to="/about">About</Nav.Link>
                            <Nav.Link as={Link} className="text-light" to="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;