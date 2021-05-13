import React from "react";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
function Folder() {
  return (
    <SingleFolder>
      <FontAwesomeIcon
        className="folderIcon"
        icon={faFolder}
        color="#92CEFF"
        size="6x"
      />
      <p>Folder Name</p>
    </SingleFolder>
  );
}

export default Folder;

const SingleFolder = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  /* border:solid 1px red;   */
  &:hover {
    background: #f2f2f2;
  }
  @media (max-width: 633px) {
    padding: 20px 35px;
  }
`;
