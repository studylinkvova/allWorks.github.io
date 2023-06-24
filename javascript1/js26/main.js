let cards = document.getElementById('cards');

let number = document.getElementById('number');

number.addEventListener('change',function(){
	drawCards(this.value)
})

function drawCards(num_cards){
	let cards_html = ``;
	for(i=0;i<num_cards;i++){
		cards_html += `<div class="card">
                <div class="card-body">
                <p class="card-text">Card ${i+1}</p>
                </div>
        </div>`
	}
	cards.innerHTML = cards_html;
}