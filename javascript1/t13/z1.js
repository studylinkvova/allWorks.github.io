let keyboard = {
    akcia: true,
    nazva: "Клавіатура дротова Logitech G209 Prodigy USB",
    reviews: 204,
    price: 1399,
    image: "<img src=photo1.jpg>"

}

let products = document.getElementById(`products`);

let product1 = `
<div class="card">
			<div class="header">
				<div class="action">Акція</div>
			</div>
			
			<div class="card_image">
				${keyboard.image}
			</div>
			
			<div class="card_info">
				<div class="name">
                ${keyboard.nazva}
				</div>
				
				<div class="reviews">
                ${keyboard.reviews} відгуки
				</div>
				
				<div class="price">
                ${keyboard.price}&#8372;
				</div>
			</div>
</div>
`;

products.innerHTML = product1 + product2;