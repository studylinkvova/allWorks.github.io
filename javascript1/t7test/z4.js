let array = [1, 2, 3];
let array2 = array.slice();
let pravilni = [];
for(i=0; i<5; i++){

    let chislo1 = prompt(`введіть число`);
    let chislo_num = Number(chislo1);
    if(array.indexOf(chislo_num) == -1){
        array.push(chislo_num);
    }else{
        array[array.indexOf(chislo_num)]= `*`;
        pravilni.push(chislo_num);
    }
}
 console.log(array);
console.log(array2);
if(array.length <= 6){
    alert(`Вітаю, ви перемогли, ви вгадали числа ${pravilni}`);
}