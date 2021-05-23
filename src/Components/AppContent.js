import React from "react";
import styled from "styled-components";
import Folder from "./Folder";
import { useStateProviderValue } from "../StateProvider";
import CreateFolder from "./CreateFolder";
import useFolder from "../useFolder";
import { useParams } from "react-router-dom";
import UploadFiles from "./UploadFiles";
import File from "./File";

function AppContent() {
  const [{ folder, folderId, childFolders, childFiles }, dispatch] =
    useStateProviderValue();
  console.log(folder);
  useFolder(useParams());
  console.log(childFolders,childFiles);
  return (
    <Wrapper>
      <Overview>
        <h4>Overview</h4>
        <hr color="lightgrey" size="1" />
      </Overview>
      <AppButtons>
        <CreateFolder currentFolder={folder} />
        <UploadFiles currentFolder={folder} />
      </AppButtons>
      <hr style={hrStyle} size="1" />
      <Folders>
        {childFolders.length > 0 &&
          childFolders.map((Cfolder) => <Folder Fodata={Cfolder} />)}
        {childFiles.length > 0 &&
          childFiles.map((file) => <File Fidata={file} />)}
      </Folders>
    </Wrapper>
  );
}

export default AppContent;

const hrStyle = {
  width: "95%",
  margin: "auto",
  color: "lightgrey",
};

const Wrapper = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 110px);
`;
const Overview = styled.div`
  width: 100%;
  h4 {
    padding: 30px 40px 10px 40px;
    font-weight: 500;
    font-size: 20px;
  }
  hr {
    width: 95%;
    margin: auto;
  }
  @media (max-width: 633px) {
    h4 {
      padding: 0px 40px 5px 10px;
    }
  }
`;
const AppButtons = styled.div`
  background: #ffffff;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  button {
    margin: 20px 0px 20px 30px;
  }
  hr {
    width: 95%;
    margin: auto;
  }
  .MuiButtonBase-root {
    color: #0d2481;
  }
  .MuiButton-contained {
    background-color: #0d2481;
    color: #fff;
    &:hover {
      background-color: #1c3da3;
    }
  }
`;
const Folders = styled.div`
  height: 100%;
  padding: 30px 20px;
  display: flex;
  flex-wrap: wrap;
`;
