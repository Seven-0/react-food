import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  // SideBtnWrap
} from "./SidebarElements.js";

const SidebarProfile = ({ isOpen, toggle }) => {
  return(
    <SidebarContainer className="sidebar-container" isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink className="link" to="/"> Profile </SidebarLink>
        <SidebarLink className="link" to="/"> Order </SidebarLink>
        <SidebarLink className="link" to="/"> Inbox </SidebarLink>
      </SidebarMenu>
      {/* <SideBtnWrap>
        <SidebarRoute to="/"> Order Now </SidebarRoute>
      </SideBtnWrap> */}
    </SidebarContainer>
  );
};

export default SidebarProfile;
