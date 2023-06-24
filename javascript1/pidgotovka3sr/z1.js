function register(){ // - створюємо функцію,яка буде діставати значення з полів введення, записувати їх в об'єкт і потім в локальне сховище
let login = document.getElementById(`login`).value; //- дістаємо значення з інпута з id "login" і записуємо в змінну
let email = document.getElementById(`email`).value;// - дістаємо значення з інпута з id "email" і записуємо в змінну
let pass = document.getElementById(`pass`).value;// - дістаємо значення з інпута з id "pass" і записуємо в змінну
let user ={ // - створюємо об'єкт під назвою "user" , щоб він зберігав логін, емейл, пароль, які ввів користувач
	login:login, // - створюємо ключ об'єкта "login" і записуємо туди значення змінної з 2 рядка
	email:email, // - створюємо ключ об'єкта "email" і записуємо туди значення змінної з 3 рядка
	pass:pass // - створюємо ключ об'єкта "pass" і записуємо туди значення змінної з 4 рядка
}
console.log(user) // - виводимо об'єкт "user" в консоль, для перевірки чи працює
localStorage.setItem(`users`,JSON.stringify(user))// - переводимо об'єкт в текст( JSON.stringify()) і записуємо в локальне сховище
}

function check_login(){ //- створюємо функцію,яка перевіряє логін і виводить помилку
	if(document.getElementById(`login`).value.length <  4){ // - перевіряємо чи довжина логіна менша за 4 символа
		document.getElementById(`pomilka`).innerHTML = `Занадто короткий логін`;// - виводимо помилку в елемент на html сторінці з id "pomilka"
		setTimeout(function(){ // - через 1 секунду після написання помилки, видаляємо її
			document.getElementById(`pomilka`).innerHTML= ``;
		},1000)
			
		
	}
	
}
function check_email(){//- створюємо функцію,яка перевіряє емейл і виводить помилку
	if(document.getElementById(`email`).value.length < 6){// - перевіряємо чи довжина емейлу менша за 6 символа
		document.getElementById(`pomilka2`).innerHTML = `Занадто короткий email`// - виводимо помилку на сторінку
		
	}else{
		document.getElementById(`pomilka2`).innerHTML= ``;// - якщо умова не підійшла, не виводимо помилку
	}
		
}





