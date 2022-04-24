import React, { useContext } from "react";
import Link from "next/link";
import LanguageContext from "../context/lenguageContext";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";

const NavbarComp = () => {
  const { lenguage, changeLenguage } = useContext(LanguageContext);

  const handdleLanguage = (idiom) => {
    changeLenguage(idiom);
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Link href="/">
            <Navbar.Brand href="/">Caliche Orozco</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link href="/">
                <Nav.Link href="/">
                  {lenguage == "Es"
                    ? "Inicio"
                    : lenguage == "En"
                    ? "Home"
                    : null}
                </Nav.Link>
              </Link>
              <Link href="/Blog">
                <Nav.Link href="/Blog">Blog</Nav.Link>
              </Link>
              <Link href="/#portafolio">
                <Nav.Link href="/#portafolio">
                  {lenguage == "Es"
                    ? "Portafolio"
                    : lenguage == "En"
                    ? "Briefcase"
                    : null}
                </Nav.Link>
              </Link>
              <NavDropdown
                title={
                  lenguage == "Es" ? (
                    <>
                      <ReactCountryFlag countryCode="MX" className="pe-2" />
                      Español
                    </>
                  ) : lenguage == "En" ? (
                    <>
                      <ReactCountryFlag countryCode="US" className="pe-2" />
                      English
                    </>
                  ) : null
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  onClick={() => {
                    handdleLanguage("Es");
                  }}
                >
                  <ReactCountryFlag countryCode="MX" className="pe-2" />
                  {lenguage == "Es"
                    ? "Español"
                    : lenguage == "En"
                    ? "Spanish"
                    : null}
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    handdleLanguage("En");
                  }}
                >
                  <ReactCountryFlag countryCode="US" className="pe-2" />
                  {lenguage == "Es"
                    ? "Ingles"
                    : lenguage == "En"
                    ? "English"
                    : null}
                </NavDropdown.Item>
              </NavDropdown>
              <Link href="/CV" target="_blank">
                <a className="nav-link btn btn btn-caliche3">
                  {lenguage == "Es"
                    ? "VER CV"
                    : lenguage == "En"
                    ? "VIEW CV"
                    : null}
                </a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarComp;
