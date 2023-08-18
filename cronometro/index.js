const btnInicioPausa = document.getElementById("btn-inicio-pausa");
const btnReiniciar = document.getElementById("btn-reiniciar");
const cronometro = document.getElementById('cronometro');


let [horas, minutos, segundos] = [0, 0, 0];
let intervaloTiempo;
let estadoCronometro = "pausado";

function actualizarCronometro() {
	segundos++;

	if (segundos / 60 === 1) {
		segundos = 0;
		minutos++;

		if (minutos / 60 === 1) {
			minutos = 0;
			horas++;
		}
	}

	const horasFormato = asignarFormato(horas);
	const minutosFormato = asignarFormato(minutos);
	const segundosFormato = asignarFormato(segundos);

	cronometro.innerText = `${horasFormato}:${minutosFormato}:${segundosFormato}`
}

function asignarFormato(tiempo) {
	return tiempo < 10 ? '0' + tiempo : tiempo;
}

function clearCronometro (){
  window.clearInterval(intervaloTiempo);
	btnInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
	btnInicioPausa.classList.remove('pausar');
	btnInicioPausa.classList.add('iniciar');
	estadoCronometro = 'pausado';
}

btnInicioPausa.addEventListener('click', function () {
	if (estadoCronometro === 'pausado') {
		//Timer -> actualizar el cronometro cada 1000 ms
		intervaloTiempo = window.setInterval(actualizarCronometro, 1000);
		btnInicioPausa.innerHTML = '<i class="bi bi-pause-circle-fill"></i>';
		btnInicioPausa.classList.remove('iniciar');
		btnInicioPausa.classList.add('pausar');

		estadoCronometro = 'contando';
	} else {
		clearCronometro();
	}
});

btnReiniciar.addEventListener('click', function (){
  horas = 0;
  minutos = 0;
  segundos = 0;
  cronometro.innerText = '00:00:00';
  clearCronometro();
});

