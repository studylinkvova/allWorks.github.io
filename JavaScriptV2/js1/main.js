let users = [];
db.collection("users").get().then(function(responce){
    responce.forEach(function(doc){
        users.push( doc.data())
       
    })
})
function draw(){
let table = document.getElementById('table')
let korzinka = '';
for(i=0;i<users.length;i++){
    korzinka+= `
    <tr>
                    <th>${i+1}</th>
                    <th>${users[i].name}</th>
                    <th>${users[i].lastname}</th>
                    <th>${users[i].email}</th>
                    <th>${users[i].phone}</th>
                </tr>
    `
}
table.innerHTML = korzinka;
}

