import React from "react";
import {
  faFile,
  faFileArchive,
  faFileAudio,
  faFileExcel,
  faFileImage,
  faFilePdf,
  faFileVideo,
  faFileWord,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

function File({ Fidata }) {
  const fileIconSelector = () => {
    if (Fidata == null) return;
    switch (Fidata.Name.split(".")[1]) {
      case "jpg" || "png":
        //   console.log("in jpg")
        return faFileImage;
      case "pdf":
        return faFilePdf;
      case "zip" || "7zip" || "bzip" || "gzip":
        return faFileArchive;
      case "mp3" || "wav":
        return faFileAudio;
      case "xlsx" || "xls":
        return faFileExcel;
      case "mp4" || "avi":
        return faFileVideo;
      case "docs" || "doc" || "txt":
        return faFileWord;
      default:
        return faFile;
    }
  };
  return (
    <a style={customStyles.linkStyle} href={Fidata.url} target="_blank">
      <SingleFile id={Fidata.id}>
        <FontAwesomeIcon
          icon={fileIconSelector()}
          color="#92CEFF"
          size="5x"
        />
        <p style={customStyles.nameStyle}>{Fidata.Name}</p>
      </SingleFile>
    </a>
  );
}

export default File;

const customStyles = {
  linkStyle: {
    "text-decoration": "none",
    color: "#000",
  },
  nameStyle: {
    width: "100px",
    "text-align": "center",
    "text-overflow": "ellipsis",
    overflow: "hidden",
    "white-space": "nowrap",
  },
};

const SingleFile = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  flex-wrap: wrap;
  line-height: 2.5;
  &:hover {
    background: #f2f2f2;
  }
  @media (max-width: 633px) {
    padding: 20px 35px;
  }
`;
