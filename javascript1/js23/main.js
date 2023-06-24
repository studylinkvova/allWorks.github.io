function showModal(id){
	let myModal = document.getElementById(`myModal`);
	myModal.style.display = `block`;
	let user = findUser(id);
	document.getElementById(`modal_body`).innerHTML = `
		<p><b>Ім'я:</b> ${user.name}</p>
			<p><b>Місто:</b> ${user.address.city}</p>
			<p><b>Email:</b>${user.email}</p>
			<p><b>Телефон:</b>${user.phone}</p>
			<p><b>Сайт:</b>${user.website}</p>
			<p><b>Компанія:</b>${user.company.name}</p>
	`
	
	
	
}
function hideModal(){
	let myModal = document.getElementById(`myModal`);
	myModal.style.display = `none`;
}

function drawUsers(){
	let users_table = document.getElementById(`users_table`);
	let new_user = ``;
	
	users.map( function(user, index){
		new_user += `
		<tr>
					<td>${index + 1}</td>
					<td>${user.name}</td>
					<td>${user.email}</td>
					<td>
						<button onclick="showModal('${user.id}')" class="btn btn-sm btn-primary">
							Детально
						</button>
					</td>
					<td>
						<button class="btn btn-danger" onclick="delUser()">Видалити</button>
					</td>
				</tr>
		`
		
	})
	
	
	users_table.innerHTML = new_user;
}
drawUsers();


function findUser(id){
	let filtered = users.filter(function(user){
		return user.id === id
	})
	return filtered[0];
}
function x(imya){
	console.log(imya)
	
}
x(`Привіт всім все круто класно першокласно`)

