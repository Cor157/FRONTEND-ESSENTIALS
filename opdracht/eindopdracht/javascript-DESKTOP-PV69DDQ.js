let mijnLeeftijd= prompt("wat is je leeftijd?");
let stemGerechtigheid= 18
let oranjekleur= 16
let blauwkleur= 17
let groenkleur= 19
if (mijnLeeftijd==stemGerechtigheid){
   // Als de gebruiker (bezoeker) 16 jaar dan wordt de achtergrond kleur van index.html een oranje-achtige kleur
   document.querySelector("body").style.backgroundColor="gold"
}
if (mijnLeeftijd==oranjekleur){
   document.querySelector("body").style.backgroundColor="orange"
}
if (mijnLeeftijd==blauwkleur){
   document.querySelector("body").style.backgroundColor="blue"
}
if (mijnLeeftijd==groenkleur){
   document.querySelector("body").style.backgroundColor="green"
}