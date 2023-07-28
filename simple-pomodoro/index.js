const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let currentTask = null;

//Referencia a los elementos HTML
const bAdd = document.querySelector('#add');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');



form.addEventListener('submit', e => {
    let taskValue = itTask.value;

    if (taskValue !== '') {
        createTask(taskValue);
        form.reset();
        getTasks();
    }
    e.preventDefault();
})


function createTask(inputValue) {
    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        title: inputValue,
        completed: false,
    }

    tasks.unshift(newTask);
    // console.log(tasks);
}

function getTasks() {
    const html = tasks.map(task => {
        return `
            <div class='task'>
                <div class='completed'>
                   ${task.completed 
                    ? `<span class='done>Done</span>` 
                    : `<button class="start-button" data-id="${task.id}">Start!</button>`}
                </div>
                <div class='title'>${task.title}</div>
            </div>
        `
    });

    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = html.join('');


    //Agregando evento a cada elemento boton.
    const startButtons = document.querySelectorAll(".task .start-button");
    startButtons.forEach(button => {
        button.addEventListener('click')
    }})
}