import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
function Activezone() {
  return (
    <Wrapper>
      <AlertSilder></AlertSilder>
      <NavPannel>
        <NavHead>
          <h1>Dropbox</h1>
        </NavHead>
        <NavMenu>
          <SearchWrapper>
            <SearchIcon fill="lightgrey" />
            <input type="text" name="" id="" placeholder="Search" />
          </SearchWrapper>
          <HelpOutlineIcon />
          <AppsIcon />
          <NotificationsIcon />
          <Avatar style={{ height: "30px", width: "30px" }} />
        </NavMenu>
      </NavPannel>
    </Wrapper>
  );
}

export default Activezone;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 240px);
`;
const AlertSilder = styled.div`
  min-height: 40px;
  width: 100%;
`;
const NavPannel = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;
const NavHead = styled.div`
  flex: 0.6;
  width: 100%;
  h1 {
    font-weight: 600;
    font-size: 25px;
  }
`;

const NavMenu = styled.div`
  flex: 0.4;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 2px;
  width: 215px;
  input[type="text"] {
    border: none;
    outline: none;
    width: 100%;
    &:active {
      outline: none;
    }
  }
  .MuiSvgIcon-root {
    color: #666666;
  }
`;
