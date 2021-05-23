import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import db from "../firebase";
import { useStateProviderValue } from "../StateProvider";
import { ROOT_FOLDER } from "../useFolder";

export default function CreateFolder({ currentFolder }) {
  const classes = useStyles();
  const [{ User }, dispatch] = useStateProviderValue();
  const [modalState, setModalState] = useState(false);
  const [newFolder, setNewFolder] = useState("");

  const handleOpen = () => {
    setModalState(true);
  };
  const handleClose = () => {
    setModalState(false);
  };
  const handleChange = (e) => {
    setNewFolder(e.target.value);
  };
  const handleSubmit = () => {
  const currentPath = [...currentFolder.path];
    if (currentFolder != ROOT_FOLDER) {
      currentPath.push({ Name: currentFolder.Name, id: currentFolder.id });
    }

    db.collection("Folders").add({
      Name: newFolder,
      user_id: User.uid,
      parent_id: currentFolder.id,
      path:currentPath,
      createdAt: new Date(),
    });

    handleClose();
  };
  return (
    <div>
      <Button
        type="button"
        variant="contained"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
        onClick={handleOpen}
      >
        Create folder
      </Button>
      <Dialog
        open={modalState}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="folderName"
            label="Folder Name"
            type="text"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create Folder
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  modal: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
