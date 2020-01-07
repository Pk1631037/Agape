import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAVfqJ2CVkHrz55W9KEBI2Y2eIwjOlegNY",
    authDomain: "android-b7591.firebaseapp.com",
    databaseURL: "https://android-b7591.firebaseio.com",
    projectId: "android-b7591",
    storageBucket: "android-b7591.appspot.com",
    messagingSenderId: "534201651480",
    appId: "1:534201651480:web:054c48b18d961ccaf48e6d"
  };

  const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase