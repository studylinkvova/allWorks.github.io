let massive = [];
while(massive.length < 5){
massive.push(prompt('Введіть число від 1 до 10'));
}
console.log(`Початковий масив - ${massive}`);
massive.sort();
console.log(massive);
massive.reverse();
console.log(massive);