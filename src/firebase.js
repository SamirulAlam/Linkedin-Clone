import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDPXhBiS8q48SD0rPfqVNPlGMSD9WQe1YU",
    authDomain: "linkedin-clone-45897.firebaseapp.com",
    projectId: "linkedin-clone-45897",
    storageBucket: "linkedin-clone-45897.appspot.com",
    messagingSenderId: "431020394827",
    appId: "1:431020394827:web:977a5d2d47331c12fa00ce"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth}