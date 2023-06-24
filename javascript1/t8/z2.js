
let kilkist = 0;
let suma = 0;
let a = true;
while(a == true){
let price = Number(prompt(`Введіть ціну товару`))
suma = suma + price;
kilkist++;
a = confirm(`Продовжити покупки?`);
}
console.log(`Ви придбали ${kilkist} товарів на загальну вартість - ${suma} грн.Середня сума покупки ${suma/kilkist}`)