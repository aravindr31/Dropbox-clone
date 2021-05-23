import { useEffect } from "react";
import db from "./firebase";
import { useStateProviderValue } from "./StateProvider";

export const ROOT_FOLDER = { Name: "Dropbox Clone", id: null, path: [] };

export default function useFolder({ foid = null }) {
  const [{ folderId, folder, childFiles, childFolders, User }, dispatch] =
    useStateProviderValue();

  const formatdbDoc = (doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  };
  useEffect(() => {
    dispatch({
      type: "UPDATE_FOLDERID",
      folderId: foid,
    });
  }, [foid]);
  console.log(folderId, User.uid);
  useEffect(() => {
    console.log(folderId);

    if (folderId == null) {
      return dispatch({
        type: "UPDATE_FOLDER",
        folder: ROOT_FOLDER,
      });
    }
    db.collection("Folders")
      .doc(folderId)
      .get()
      .then((doc) => {
        dispatch({
          type: "UPDATE_FOLDER",
          folder: formatdbDoc(doc),
        });
      })
      .catch(() => {
        dispatch({
          type: "UPDATE_FOLDER",
          folder: ROOT_FOLDER,
        });
      });
  }, [folderId]);

  useEffect(() => {
    return db
      .collection("Folders")
      .where("parent_id", "==", folderId)
      .where("user_id", "==", User.uid)
      .orderBy("createdAt")
      .onSnapshot((snap) => {
        dispatch({
          type: "SET_CHILD_FOLDERS",
          childFolders: snap.docs.map((doc) => formatdbDoc(doc)),
        });
      });
  }, [folderId, User]);

  useEffect(() => {
    return db
      .collection("Files")
      .where("parent_id", "==", folderId)
      .where("user_id", "==", User.uid)
      .orderBy("createdAt")
      .onSnapshot((snap) => {
        dispatch({
          type: "SET_CHILD_FILES",
          childFiles: snap.docs.map((doc) => formatdbDoc(doc)),
        });
      });
  }, [folderId, User]);
}
