let igra = [4, 7, 2];
for(i=1; i<6; i++){
   let cifra = prompt(`Введіть число`);
   let cifra_num = Number(cifra);
    let index = igra.indexOf(cifra_num);
  if(index == -1){
    igra.push(cifra_num);

   }else{

    igra[index]= "*";
   }

} 
console.log(igra);