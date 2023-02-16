import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <Navbar bg="info" variant="info" expand="lg" className='sticky-top shadow-lg ' style={{ height: '80px' }}>
            <Container >
                <Navbar.Brand as={Link} to="/">
                    <img src='https://cdn-icons-png.flaticon.com/512/21/21601.png' alt='logo' width='70px' height='70px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"  style={{ padding: '0 10px', background: '#0dcaf0' }} navbarScroll>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header