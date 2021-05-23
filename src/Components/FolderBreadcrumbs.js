import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { ROOT_FOLDER } from "../useFolder";
import "../Common.css"
const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

const customStyles = {
  customBreadcrumps: {
    "flex-wrap": "none",
  },
  customH1: {
    "font-weight": "500",
    "font-size": "21px",
  },
  customLink: {
    "text-decoration": "none",
    color: "#787268",
  },
  customTypo: {
    width: "150px",
  },
};
export default function FolderBreadcrumbs({ currentFolder }) {
  let folderPath = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) folderPath = [...folderPath, ...currentFolder.path];
  console.log(folderPath);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs
        style={customStyles.customBreadcrumps}
        separator={<NavigateNextIcon />}
        aria-label="breadcrumb"
      >
        {folderPath.map((folder) => (
          <Link
            style={customStyles.customLink}
            to={folder.id != null ? `/folder/${folder.id}` : "/"}
          >
            <h1 style={customStyles.customH1}>{folder.Name}</h1>
          </Link>
        ))}
        {currentFolder && (
          <Typography
            noWrap
            style={customStyles.customTypo}
            color="textPrimary"
          >
            <h1 style={customStyles.customH1}>{currentFolder.Name}</h1>
          </Typography>
        )}
      </Breadcrumbs>
    </div>
  );
}
