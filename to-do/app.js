const input = document.getElementById("ingresar-tarea");
const btn = document.querySelector("button");
const listaDeTareas = document.getElementById("lista-de-tareas");

function agregarTarea() {
  if (input.value) {

    //Crear tarea.
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    //Texto ingresado
    let texto = document.createElement('p');
    texto.innerHTML = input.value;
    tareaNueva.appendChild(texto);

    //Crear y agregar iconos.
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos);

    //iconos
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    iconos.append(completar, eliminar);

    //agregar tarea
    listaDeTareas.appendChild(tareaNueva);
    input.value = "";
    

  } else{
    alert('Por favor ingresa una tarea');
  }
}

function completarTarea (e){
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completado');
}

function eliminarTarea (e){
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

btn.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) =>{
  if (e.key === 'Enter') {
    agregarTarea();
  }
});