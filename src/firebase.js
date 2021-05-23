import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBAM0aWMtf4suWCsOxtyAJKu8pr7w7DdPA",
  authDomain: "dropbox-clone-313609.firebaseapp.com",
  projectId: "dropbox-clone-313609",
  storageBucket: "dropbox-clone-313609.appspot.com",
  messagingSenderId: "602599784650",
  appId: "1:602599784650:web:503ec17f4146ba2f643433",
  measurementId: "G-JKTKGWQX71",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage()

export { auth, provider,storage };
export default db;
