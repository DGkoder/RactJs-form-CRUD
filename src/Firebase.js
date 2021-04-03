
import firebase from 'firebase';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAGAC9ah2blAG8yIECmLO5gWKa-5sKuj_w",
    authDomain: "react-form-crud.firebaseapp.com",
    databaseURL: "https://react-form-crud-default-rtdb.firebaseio.com",
    projectId: "react-form-crud",
    storageBucket: "react-form-crud.appspot.com",
    messagingSenderId: "371990168138",
    appId: "1:371990168138:web:14f276aed9b6d4fc745cb3"
  };
  // Initialize Firebase
const firedb = firebase.initializeApp(firebaseConfig);

export default firedb.database().ref();

const db = firedb.firestore();
const auth = firedb.auth();
const storage = firedb.storage();

export { db, auth, storage };

