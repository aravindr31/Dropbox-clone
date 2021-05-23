import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useStateProviderValue } from "../StateProvider";
import db, { storage } from "../firebase";
import { ROOT_FOLDER } from "../useFolder";

function UploadFiles({ currentFolder }) {
  const [{ User, progressLevel },dispatch] = useStateProviderValue();
  const classes = useStyles();
  const handleUpload = (e) => {
    const File = e.target.files[0];
    if (File == null || currentFolder == null) return;

    const filePath =
      currentFolder === ROOT_FOLDER
        ? `${currentFolder.path.join("/")}/${File.name}`
        : `${currentFolder.path.map((Fpath) => Fpath.Name).join("/")}/${
            currentFolder.Name
          }/${File.name}`;
    const uploadFile = storage.ref(`/files/${User.uid}/${filePath}`).put(File);

    uploadFile.on(
      "state_changed",
      (snapshot) => { 
        dispatch({
          type: "SET_PROGRESS_LEVEL",
          progressLevel: snapshot.bytesTransferred / snapshot.totalBytes,
        });
      },
      () => {},
      (snapshot) => {
        uploadFile.snapshot.ref.getDownloadURL().then((url) => {
          console.log(url);
          db.collection("Files").add({
            Name: File.name,
            url: url,
            parent_id: currentFolder.id,
            user_id: User.uid,
            createdAt: new Date(),
          });
        });
      }
    );
  };
  return (
    <div>
      <Button
        type="button"
        variant="contained"
        component="label"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        <input type="file" hidden onChange={handleUpload} />
        Upload File
      </Button>
    </div>
  );
}

export default UploadFiles;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
