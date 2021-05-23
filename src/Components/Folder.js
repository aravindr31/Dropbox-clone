import React from "react";
import { faFileWord, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Folder({ Fodata }) {
  return (
    <Link to={`/folder/${Fodata.id}`} style={customStyles.linkStyle}>
      <SingleFolder id={Fodata.id}>
        <FontAwesomeIcon
          className="folderIcon"
          icon={faFolder}
          color="#92CEFF"
          size="6x"
        />
        <p style={customStyles.nameStyle}>{Fodata.Name}</p>
      </SingleFolder>
    </Link>
  );
}

export default Folder;

const customStyles = {
  linkStyle: {
    "text-decoration": "none",
    color: "#000",
  },
  nameStyle: {
    width: "100px",
    "text-align":"center",
    "text-overflow": "ellipsis",
    overflow: "hidden",
    "white-space": "nowrap",
  },
};

const SingleFolder = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  &:hover {
    background: #f2f2f2;
  }
  @media (max-width: 633px) {
    padding: 20px 35px;
  }
`;
