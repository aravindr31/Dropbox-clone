import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@material-ui/core/styles";
import Folder from "./Folder";
function AppContent() {
  const classes = useStyles();
  return (
    <Wrapper>
      <Overview>
        <h4>Overview</h4>
        <hr color="lightgrey" size="1" />
      </Overview>
      <AppButtons>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload folder
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          startIcon={<CloudUploadIcon />}
        >
          Upload File
        </Button>
        <hr color="lightgrey" size="1" />
      </AppButtons>
      <Folders>
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
      </Folders>
    </Wrapper>
  );
}

export default AppContent;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Wrapper = styled.div`
  overflow: scroll;
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  background: #ffffff;
  position: sticky;
  top: 0;
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
  /* border: 1px solid red; */
  height: 100%;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  /* overflow: scroll;

  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
`;
