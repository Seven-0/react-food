import React from "react";
import { Nav, NavLink, NavIcon, Bars} from "./NavbarElements.js";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavLink to='/'> Khanaval </NavLink>
        <NavIcon onClick={toggle}>
            <p> Menu </p>
            <Bars />                        
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
