


function dodajElement(tekst){
    let li = document.createElement('li');
    let lista = document.getElementById('lista');
    li.innerHTML=tekst;
    lista.appendChild(li);
}


let tablica = ["pięć", "sześć","siedem", "osiem", "dziewięc"];

for (let el of tablica){
    dodajElement(el);
}