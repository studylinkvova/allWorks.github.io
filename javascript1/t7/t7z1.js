let pass = 1234;
let lich = 3;
for(i=1; i<4; i++){
   let sproba =  prompt(`Введіть пароль. Залишилось спроб - ${lich}`);
    lich--;
    if(lich == 1){
        alert(`Підказка:1234`);
    }
   if(sproba == pass){
    alert("Пароль вірний.");
    break;
   }
}