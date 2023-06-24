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
let sait_users = [];
db.collection('user_test').get().then(function(res){
    res.forEach(function(doc){
        let user  = doc.data()
        user.id = doc.id;
        sait_users.push(user)
    });
})
console.log(sait_users)
function check_sign(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    for(i=0;i<sait_users.length;i++){
        if(sait_users[i].email == email){
           if(sait_users[i].password == password){
            localStorage.setItem('sign_in' , JSON.stringify(sait_users[i]))
           }
        }
    }
}