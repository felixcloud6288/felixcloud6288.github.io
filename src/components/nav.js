import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Navigator(){

return(
<Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="/">Matthew Weston</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/projects">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
    </Navbar.Collapse>
</Navbar>
)}
export default Navigator