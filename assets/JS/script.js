// js-biglietto-treno

/*
1. chiedere all’utente il numero di chilometri che vuole percorrere
2. chiedere l’età del passeggero
3. calcolare il prezzo totale del viaggio, secondo queste regole:
   -il prezzo del biglietto è definito in base ai km (0.21 € al km)
   -va applicato uno sconto del 20% per i minorenni
   -va applicato uno sconto del 40% per gli over 65.
4. L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 */

const pricePerKm = 0.21, underageDiscount = 20, overageDiscount = 40;
let km, age, price, output;

km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
age = parseInt(prompt("Indica la tua età:"));

price = km*pricePerKm;
output =
`
<h2>Resoconto</h2>
<ul>
  <li>Chilometri da percorrere: <strong>${km}</strong>;
  <li>Et&agrave; del passeggero: <strong>${age}</strong>;
  <li>Prezzo: <strong>${price}&euro;</strong> [${pricePerKm}&euro; per km];
  <li>Sconto: <strong>
`;

if(age<18){
  price -= price/100*underageDiscount;
  output += `${underageDiscount}&percnt;</strong> [under 18];`
}
else if(age>=65){
  price -= price/100*overageDiscount;
  output += `${overageDiscount}&percnt;</strong> [over 65];`
}
else{
  output += `no</strong>;`
}
price = parseFloat(price.toFixed(2));
output +=
`
  <li><strong>Prezzo finale: ${price}&euro;</strong>
</ul>
`
document.getElementById("output").innerHTML = output;