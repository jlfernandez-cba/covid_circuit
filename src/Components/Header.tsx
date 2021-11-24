import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container className="container">
          <Navbar.Brand href="scroll-top">Covid-Circuit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-toggle" className="navbar-toggle" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#results">Results</Nav.Link>
              <Nav.Link href="#clinical-interest">Clinical Interest</Nav.Link>
              <Nav.Link
                href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all"
                target="_blank"
                rel="noreferrer"
                data-id="localNextrain"
              >NextStrain Map</Nav.Link>
              <Nav.Link href="#news">News</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <LanguageSwitcher language="es" />
            <LanguageSwitcher language="en" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
