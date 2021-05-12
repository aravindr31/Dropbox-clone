import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDropbox } from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  return (
    <SidebarWrapper>
      <NavLogo>
        <FontAwesomeIcon
          style={{ "padding-left": "40px" }}
          icon={faDropbox}
          color="#3A4D97"
          size="2x"
        />
      </NavLogo>
      <Navlist>
        <NavItems>Home</NavItems>
        <NavItems>All files</NavItems>
        <NavItems>Recents</NavItems>
        <NavItems>Starred</NavItems>
        <NavItems>Shared</NavItems>
        <NavItems>File requets</NavItems>
        <NavItems>Deleted files</NavItems>
      </Navlist>
    </SidebarWrapper>
  );
}

export default Sidebar;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 240px;
  min-width: 240px;
  background: #f2f2f2;
`;
const NavLogo = styled.div`
  flex: 0.2;
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;
const Navlist = styled.div`
  flex: 0.8;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const NavItems = styled.div`
  padding: 11px 40px;
  font-size: 18px;
  color: #626262;
  font-weight: 400;
  &:hover {
    color: #000;
  }
`;