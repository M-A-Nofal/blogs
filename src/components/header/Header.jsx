import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import User from './User'
import './header.css';

function Header() {
    return (
        <Navbar bg="info" variant="info" expand="lg" className='sticky-top shadow-lg ' style={{ height: '80px' }}>
            <Container >
                <Navbar.Brand as={Link} to="/">
                    <img src='https://cdn-icons-png.flaticon.com/512/21/21601.png' alt='logo' width='80px' height='80px' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav className="mx-auto my-2 my-lg-0" style={{ padding: '0 10px' }} navbarScroll>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                    </Nav>
                    <div className='account'>
                        <User />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header