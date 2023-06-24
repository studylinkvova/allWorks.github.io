let igra_chisla = [];

for(i=0; i<5; i++){
igra_chisla.push(prompt(`введіть число`));

}
for(i=0; i<3; i++){
let sproba = prompt(`Вгадайте число`);

if(igra_chisla.indexOf(sproba) == -1){


}else{
alert(`Ви вгадали!`);
}

}