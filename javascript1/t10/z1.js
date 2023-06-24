let name = document.getElementById(`name-user`);

let imya = prompt(`Як вас звати?`);
let gmail = prompt(`Введіть свою пошту.`);
let parol = prompt(`Введіть пароль.`);




if(parol == `111`){
name.innerHTML = `<a href=""> ${imya} </a>`;

let html_gmail = document.getElementById(`privitanya`);
html_gmail.innerHTML= `Вітаю ${imya}! На вашу поштову скриньку <br> ${gmail} відправлено лист із підтвердженням. `
}else{


}

console.log(name);