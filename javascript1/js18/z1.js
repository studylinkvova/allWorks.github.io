const users = [
	{
		name: "Олег",
		email: "olegivanov@.gmail.com"
	},
	{
		name: "Таня",
		email: "taniavit@.gmail.com"
	},
	{
		name: "Тарас",
		email: "tarik95@.gmail.com"
	},
	{
		name: "Оксана",
		email: "oksana2002@.gmail.com"
	}
];


function showError(text){
	
	let message = document.getElementById(`message`);
	let message_text = `<div class="alert alert-danger col-6">${text}</div>`;
	
	message.innerHTML = message_text;
	setTimeout(function(){
		message.innerHTML = ``;
		
	},3000)
}
function showSuccess(text){
	
	let message = document.getElementById(`message`);
	let message_text = `<div class="alert alert-success col-6">${text}</div>`;
	
	message.innerHTML = message_text;
	setTimeout(function(){
		message.innerHTML = ``;
		
	},3000)
}

function checkName(){
	let name = document.getElementById(`name`).value;
	let new_arr = users.filter(function(user){
		return user.name.toLowerCase() == name.toLowerCase()
		
	})
	if(new_arr.length > 0){
		showError(`Користувач з таким ім'ям вже зареєстрований`)
		
	}
}name.length < 3 &&  &&