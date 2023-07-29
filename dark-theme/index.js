const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

toggle.onclick = function (){
    toggle.classList.toggle('active-toggle');
    body.classList.toggle('active-body');
} 