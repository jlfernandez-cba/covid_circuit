import flag_spa from "../img/spanish-language.svg";
import flag_eng from "../img/english-language.svg";

import { Navbar, Container, Nav, NavItem, NavLink } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
        className="navbar navbar-inverse"
        role="navigation"
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
              >
                NextStrain Map
              </Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Navbar.Brand href="#">
            <img src={flag_spa} width="30" height="30" className="d-inline-block" alt="spanish flag" />
          </Navbar.Brand> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
