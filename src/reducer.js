export const initialState = {
  User: localStorage.getItem("User")
    ? JSON.parse(localStorage.getItem("User"))
    : null,
  folderId: null,
  folder: null,
  childFolders: [],
  childFiles: [],
  modalState: false,
  progressLevel: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        User: action.User,
      };
    case "SET_MODELSTATE":
      return {
        ...state,
        modalState: action.modalState,
      };
    case "SELECT_FOLDER":
      return {
        folderId: action.folderId,
        folder: action.folder,
        childFolders: [],
        childFiles: [],
      };
    case "UPDATE_FOLDER":
      return {
        ...state,
        folder: action.folder,
      };
    case "UPDATE_FOLDERID":
      return {
        ...state,
        folderId: action.folderId,
      };
    case "SET_CHILD_FOLDERS":
      return {
        ...state,
        childFolders: action.childFolders,
      };
    case "SET_CHILD_FILES":
      return {
        ...state,
        childFiles: action.childFiles,
      };
    case "SET_PROGRESS_LEVEL":
      return {
        ...state,
        progressLevel: action.progressLevel,
      };
    default:
      return state;
  }
};
export default reducer;
