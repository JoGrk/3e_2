let ul=document.getElementById('listaZakupow');
let lista = [ "chleb",  "cukier", "cytryny"];

for (let produkt of lista){
	dodajElement(produkt);
}


function dodajElement(produkt){
	let li = document.createElement('li');
	li.innerText = produkt;
	ul.appendChild(li);
}
