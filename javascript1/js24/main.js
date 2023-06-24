
 function drawCards(cards_mass){
	 let cards = document.getElementById(`cards`);
	 let cards_html = ``;
	cards_mass.map(function(card){
		let action = ``;
		if(card.action == true){
		 action = `<div class="action">Акція</div>`
		}
		cards_html += `
		<div class="card">
			${action}
					<img src=${card.image} class="card-img-top">
				<div class="card-body">
					<h6 class="card-title">${card.name}</h6>
					<ul class="list-group list-group-flush">
						<li class="list-group-item"><b>Виробник:</b> <span>${card.developer}</span></li>
						<li class="list-group-item"><b>Відгуків:</b> <span>${card.reviews}</span></li>
						<li class="list-group-item"><b>Ціна:</b> <span>${card.price}₴</span></li>
					</ul>
				</div>
				<div class="card-body price">
					<a href="#" class="card-link">В корзину</a>
					<a href="#" class="card-link">Придбати</a>
				</div>
		</div>
		`
		
	})
	 
	 cards.innerHTML= cards_html;
	 
 }
 drawCards(phones)
 function findDevelopers(){
	 let developers = [];
	 
	 phones.map( function(phone){
		 if(developers.indexOf(phone.developer) === -1){
		 developers.push(phone.developer)
		 }
	 })
	 let datalistOptions = document.getElementById(`datalistOptions`);
	 
	 let options = ``;
	 
	 developers.map( function(dev){
		 options += `<option value="${dev}">`
		 
	 })
	 
	 datalistOptions.innerHTML = options;
	 
 }
 
 findDevelopers()
 
 function saveFilter(){
	 let filter = {
		 developer: document.getElementById(`developer`).value,
		 name: document.getElementById(`name`).value,
		 min_price: document.getElementById(`min_price`).value,
		 max_price: document.getElementById(`max_price`).value,
		 order: document.getElementById(`order`).value
	 }
	 localStorage.setItem("filter", JSON.stringify(filter))
	 
	 redrawCards(filter)
 }

function redrawCards(x){
	let new_phones = phones.slice();
	if(x.name.length > 0){
		new_phones =  new_phones.filter( function(phone){
			return phone.name.includes(x.name)
		})
	}
	if(x.developer.length > 0){
		new_phones =  new_phones.filter( function(phone){
			return phone.developer === x.developer
		})
	}
	if(x.min_price.length > 0){
		new_phones =  new_phones.filter( function(phone){
			return x.min_price <= phone.price
		})
	}
	if(x.max_price.length > 0){
		new_phones =  new_phones.filter( function(phone){
			return x.max_price >= phone.price
		})
	}
	if(x.order.length > 0 && x.order === "price"){
		new_phones =  new_phones.sort( function(a, b){
			return  a.price - b.price
		})
	}
	if(x.order.length > 0 && x.order === "reviews"){
		new_phones =  new_phones.sort( function(a, b){
			return   b.reviews  - a.reviews 
		})
	}
	
	drawCards(new_phones)
}

let object_filter = JSON.parse(localStorage.getItem("filter"));
if(object_filter){
	redrawCards(object_filter)
}else{
	drawCards(new_phones)
}