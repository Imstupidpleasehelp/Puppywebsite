import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col"></div>
        <Navbar className="navbarmaster align-self-center" light expand="md">
          <NavbarToggler onClick={toggle} />
          <NavbarBrand href="/" className="navbarlogo2 img-fluid">
            <img
              width="180px"
              height="135px"
              src="./assets/headerlogo.jpg"
              alt="logo"
            ></img>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav  className="">
                  <img
                    width="150px"
                    height="110px"
                    src="./assets/navboneinfo.png"
                    
                    alt="navbone"
                    className="img-fluid  navbone"
                  ></img>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/about">
                      <NavItem>About us</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/breedinfo">
                      <NavItem>About Doodles</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/affliates">
                      <NavItem>Our Affliates</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/rainbowbridge">
                      <NavItem>Our past greats</NavItem>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav  className="">
                  <img
                     width="150px"
                     height="110px"
                    
                    alt="navbone"
                    src="./assets/navbone.png"
                    className="img-fluid navbone"
                  ></img>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/puppies">
                      <NavItem className="navdropdown">All Puppies</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/parents">
                      <NavItem className="navdropdown">Parents</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/poodles">
                      <NavItem className="navdropdown">Poodles</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/labradoodles">
                      <NavItem className="navdropdown">Labradoodles</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/goldendoodles">
                      <NavItem className="navdropdown">Goldendoodles</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/application">
                      <NavItem className="navdropdown">Application</NavItem>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavbarBrand href="/" className="">
                <img
                  width="180px"
                  height="180px"
                  src="./assets/headerlogo.jpg"
                
                  className="navbarlogo"
                  alt="navbone"
                ></img>
              </NavbarBrand>

              <NavItem>
                <NavLink href="/reviews" className="">
                  {" "}
                  <img
                     width="150px"
                     height="110px"
                    
                    alt="navbone"
                    className="img-fluid  navbone"
                    src="./assets/navbonereview.png"
                  ></img>
                </NavLink>
              </NavItem>

              <NavLink
                href="https://www.pawtree.com/jymrdoodles/myrecommendation/Standard-Package?fbclid=IwAR1x9IKyAO0ojODicSbSXWO7305bY4A3jnFoJZvPQaAHLBcMmMnqhjZXhPY"
                className=""
                target="_blank"
              >
                {" "}
                <NavItem>
                  <img
                      width="150px"
                      height="110px"
                    alt="navbone"
                    className="img-fluid  navbone"
                   
                    src="./assets/navbonepawtreee.png"
                  ></img>
                </NavItem>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default Navigation;
