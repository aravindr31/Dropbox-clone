import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, Breadcrumbs } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStateProviderValue } from "../StateProvider";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import Progressbar from "./Progressbar";
function Header() {
  const [{ User, folder, progressLevel }] = useStateProviderValue();
  console.log(progressLevel);
  return (
    <Wrapper>
      <AlertSilder>{progressLevel != 0 && <Progressbar />}</AlertSilder>
      <MediaConatiner>
        <MenuContainer>
          <div className="menuConatiner_right">
            <MenuIcon />
          </div>
          <div className="menuConatiner_left">
            <HelpOutlineIcon className="menuItems" />
            <AppsIcon className="menuItems" />
            <NotificationsIcon className="menuItems" />
            <Avatar
              src={User?.photoURL}
              style={{ height: "30px", width: "30px" }}
            />
          </div>
        </MenuContainer>
        <SearchContainer>
          <SearchIcon fill="lightgrey" />
          <input type="text" name="" id="" placeholder="Search" />
        </SearchContainer>
      </MediaConatiner>
      <NavPannel>
        <NavHead>
          <FolderBreadcrumbs currentFolder={folder} />
        </NavHead>
        <NavMenu>
          <SearchWrapper>
            <SearchIcon fill="lightgrey" />
            <input type="text" name="" id="" placeholder="Search" />
          </SearchWrapper>
          <HelpOutlineIcon />
          <AppsIcon />
          <NotificationsIcon />
          <Avatar
            src={User?.photoURL}
            style={{ height: "30px", width: "30px" }}
          />
        </NavMenu>
      </NavPannel>
    </Wrapper>
  );
}
export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 240px);
  @media (max-width: 633px) {
    width: 100vw;
  }
`;
const AlertSilder = styled.div`
  min-height: 40px;
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  @media (max-width: 633px) {
    display: none;
  }
`;
const MediaConatiner = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 633px) {
    display: flex;
  }
`;
const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 20px 7px 20px;
  position: sticky;
  top: 7px;
  .menuConatiner_left {
    display: flex;
    align-items: center;
    .menuItems {
      padding: 10px 14px 14px 0px;
    }
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border: 1px solid lightgray;
  padding: 3px 10px;
  width: 90%;
  input[type="text"] {
    border: none;
    outline: none;
    width: 100%;
    line-height: 2.3em;
    padding-left: 10px;
    &:active {
      outline: none;
    }
  }
  .MuiSvgIcon-root {
    color: #666666;
  }
`;
const NavPannel = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  @media (max-width: 633px) {
    padding: 0px 10px;
  }
`;
const NavHead = styled.div`
  flex: 0.5;
  width: 100%;
  overflow-x: scroll;
  height: 35px;
  overflow-y: hidden;
  overflow-wrap: nowrap;
  @media (max-width: 633px) {
    flex:1
  }
`;

const NavMenu = styled.div`
  flex: 0.5;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 633px) {
    display: none;
  }
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 2px;
  width: 300px;
  padding: 3px 10px;
  input[type="text"] {
    border: none;
    outline: none;
    line-height: 2.1em;
    padding-left: 10px;

    width: 100%;
    &:active {
      outline: none;
    }
  }
  .MuiSvgIcon-root {
    color: #666666;
  }
`;
