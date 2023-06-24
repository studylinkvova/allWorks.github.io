let main = document.getElementById(`main`);

let car1 = {
    image: "<img src=a1.jpg>",
    name: "Lanos",
    price: 3500,
    color: "сірий",
    probig: 20

}
let cars =  `<div class="car">
${car1.image}
<h2 align="center">${car1.name} </h2>
<h3>Ціна: ${car1.price}$ </h3>
<h4>Колір: ${car1.color}  </h4>  
<h4>Пробіг: ${car1.probig} тис. км</h4>    
</div>`;
display:flex
cars +=  `<div class="car">
${car2.image}
<h2 align="center">${car2.name} </h2>
<h3>Ціна: ${car2.price}$ </h3>
<h4>Колір: ${car2.color}  </h4>  
<h4>Пробіг: ${car2.probig} тис. км</h4>    
</div>`;


main.innerHTML = cars;