import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Nav.Link className="navbar" as={HashLink} to="/home" ><img style={{ "height": "40px", "width": "100px" }} src="https://i.ibb.co/ZBMj8w9/rsz-1148579-removebg-preview.png" alt="" /></Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="d-flex justify-content-end">

                            <Nav.Link className="navbar" as={HashLink} to="/explore">Explore More</Nav.Link>
                            <Nav.Link className="navbar" as={HashLink} to="/About">About</Nav.Link>
                            <Nav.Link className="navbar" as={HashLink} to="/Businesses">Businesses</Nav.Link>
                            <Nav.Link className="navbar " as={HashLink} to="/dashboard">Dashboard</Nav.Link>

                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    {user.email ? (
                                        <button
                                            onClick={logOut}
                                            className="navbar"
                                        >
                                            Logout
                                        </button>
                                    ) : (
                                        <Link
                                            to="/login"
                                            className="navbar"
                                        >
                                            Login
                                        </Link>
                                    )}
                                </Navbar.Text>
                            </Navbar.Collapse>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;