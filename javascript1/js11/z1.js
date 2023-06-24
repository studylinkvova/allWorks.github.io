let month = document.getElementById(`month`);
let days = ` `;
let misyac = prompt(`Для якого місяця календар?`);
let zagolovok = document.getElementById(`zagolovok`);
zagolovok.innerText = `Календар для місяця ${misyac} `;
let x = 32;



for(i=1; i<x; i++){
    if(i % 7 == 0 || (i+1) % 7 == 0){
days += `<div class="day week">${i} <br> ${misyac}</div>`;
    }else{
days += `<div class="day">${i} <br> ${misyac}</div>`;
    }
}
month.innerHTML = days;
