import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import '../styles/Navbar.css';

const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Navbar.Brand href="#">Video Streaming</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
        </Nav>
        <Form inline className="form-inline">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
