import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCFvw-NVE9mJbiqBVkhOQKjcfO80IAO374",
    authDomain: "four-horsemen-a767d.firebaseapp.com",
    projectId: "four-horsemen-a767d",
    storageBucket: "four-horsemen-a767d.appspot.com",
    messagingSenderId: "678966640489",
    appId: "1:678966640489:web:76e35df8e6dbb4520107f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;