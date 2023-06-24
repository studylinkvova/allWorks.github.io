let numbers = [];
alert('Правила гри');
for(i=1; i<6; i++){
numbers.push(prompt("Гравець 1, загадйте  № число від 1 до 20"))  ;

}
alert("Гравець №1 передайте гравцю №2");
for(i=8; i>7; i++){


let answer = prompt('Гравець 2,пробуйте вгадати число від 1 до 20');

if(numbers.indexOf(answer) == -1){alert(`Ви програли, ГРА ПОЧИНАЄТЬСЯ ЗАНОВО`);}
else{
    alert(`Ви Виграли`);
break;
}


}


console.log(numbers);