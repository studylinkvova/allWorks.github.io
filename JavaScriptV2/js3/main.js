const firebaseConfig = {
    apiKey: "AIzaSyBncRCJ_WqhVHd0xH4ptADXZBd6YYF0Evg",
    authDomain: "study-link-sb14ch2.firebaseapp.com",
    projectId: "study-link-sb14ch2",
    storageBucket: "study-link-sb14ch2.appspot.com",
    messagingSenderId: "162500883967",
    appId: "1:162500883967:web:15cb47f69ab1472d4de3ca"
  };
firebase.initializeApp(firebaseConfig);
  
var db = firebase.firestore();

function saveUser(){
    let user = {
        name: document.getElementById('name').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    }
    console.log(user)
    db.collection("users").add(user)
    
}
var db = firebase.firestore(); - записати всі данні з бази данних в змінну
db.collection("назва колекції").add(що записуємо у цю колекцію)
колекція - це масив. Документ - це об'єкт