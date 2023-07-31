const container = document.getElementById('container');
const title = document.getElementById('title');
const toppings = document.getElementsByClassName('topping');
const myToppings = document.getElementsByTagName('li');
console.log(myToppings);

//querySelector -> Most powerfull

const aceitunas = document.querySelector('#aceitunas');
const primerToppingNaranja = document.querySelector('.topping.fondo-naranja')
const fondosNaranjas = document.querySelectorAll('.topping.fondo-naranja');
console.log(fondosNaranjas);

//Estilos CSS
const primerTopping = document.querySelector('.topping');
primerTopping.style.backgroundColor = 'blue';