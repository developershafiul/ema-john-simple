import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/shop">Shop</Nav.Link>
                        <Nav.Link href="/order">Order</Nav.Link>
                        <Nav.Link href="/review">ReviewManage</Nav.Link>
                        <Nav.Link href="/inventory">Inventory here</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;