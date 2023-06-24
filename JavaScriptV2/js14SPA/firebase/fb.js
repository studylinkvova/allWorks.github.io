const firebaseConfig = {
    apiKey: "AIzaSyD5zdxHnEJ-sg9DAEWU2VY5sl0C_MaC2G8",
    authDomain: "studylinkv.firebaseapp.com",
    projectId: "studylinkv",
    storageBucket: "studylinkv.appspot.com",
    messagingSenderId: "220527342329",
    appId: "1:220527342329:web:df3da44a2107c6fca12828"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();