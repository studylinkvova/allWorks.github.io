const arr_1 = ['Пн', 'Вт', 'Ср','Чт', 'Пт', 'Сб', 'Нд'];
const arr_2 = [ 1200, 1140, 1400, 1150, 1400, 2500, 2950];

let zagalniy_pributok = 0;
console.log(`День - прибуток`);

for(i=0; i < arr_1.length; i++){
console.log(`${arr_1[i]} - ${arr_2[i]}`);
zagalniy_pributok = zagalniy_pributok + arr_2[i];
}