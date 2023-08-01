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
primerTopping.style.backgroundColor = 'blue';''
primerTopping.classList.add('demostracion');
//Obtener clases
console.log(primerTopping.classList);

primerTopping.classList.remove('demostracion');
//Obtener clases
console.log(primerTopping.classList);

//Agregar elementos
const listaDeToppings = document.getElementById('toppings-list');
const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Queso Extra'

listaDeToppings.append(toppingNuevo);

toppingNuevo.remove();

//Jugando con eventos :D
function mostrarClick(e){
    console.log(e.target.innerText);
}

for(const topping of toppings){
    topping.addEventListener('click', mostrarClick);
}