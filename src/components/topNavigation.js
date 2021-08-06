import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, NavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import '../App.css'
import TopText from "./Pages/Section/TopText";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return ( 
    <>       
        <TopText/>
      <MDBNavbar color="unique-color-dark sticky-top"  dark expand="md">
      <MDBNavbarBrand to="/Home">
      <i className="logo" class="fas fa-award"></i>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <NavLink className="activeClass" exact={true} to="/home">Home</NavLink>
              
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                 <span className="mr-">Fabrics</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem className="myNavItems"><NavLink className="activeClass" to="/designOne">Levis Brand</NavLink></MDBDropdownItem>
                  <MDBDropdownItem className="myNavItems"><NavLink className="activeClass" to="/designTwo">Alkaram Brand</NavLink></MDBDropdownItem>
                  <MDBDropdownItem className="myNavItems"><NavLink className="activeClass" to="/designThree">Outfitters Brand</NavLink></MDBDropdownItem>
                  <MDBDropdownItem className="myNavItems"><NavLink className="activeClass" to="/designFour">J. Brand</NavLink></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink className="activeClass" to="/about">About us</NavLink>
            </MDBNavItem>
            <MDBNavItem className="activeClass">
              <NavLink to="/contact">Contact us</NavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </>
    );
  }
}

export default NavbarPage;