const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let currentTask = null;

//Referencia a los elementos HTML
const bAdd = document.querySelector('#add');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');
// const taskName = document.querySelector('#time #taskName');

getTime();
getTasks();

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
        <div class="task">
        <div class="completed">${
          task.completed
            ? "<span class='done'>Done</span>"
            : `<button class="start-button" data-id="${task.id}">Start</button></div>`
        }
            <div class="title">${task.title}</div>
        </div>`;
    
    });

    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = html.join('');


    //Agregando evento a cada elemento boton.
    const startButtons = document.querySelectorAll(".task .start-button");
    startButtons.forEach(button => {
        button.addEventListener('click', e => {

            if(!timer){
                const id = button.getAttribute('data-id');
                button.textContent = 'In progress...';
                startButtonHandler(id);

            }
        });
    });
}

function startButtonHandler(id){
    time = 25 * 60;
    currentTask = id;

    const taskId = tasks.findIndex((task) => task.id === id);
    document.querySelector("#time #taskName").textContent = tasks[taskId].title;

    timer = setInterval(() =>{
        timeHandler(id);
    }, 1000);
}

function timeHandler(id){
    time --;
    getTime(id);

    if (time === 0){
        clearInterval(timer);
        timer = null;
        markCompleted(id);
        startBreak(id);
        getTasks(id);
    }
}

function getTime(id){
    const timeDiv = document.querySelector('#time #value');
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);

    timeDiv.textContent = `${minutes < 10 ? '0' : ""}${minutes}: ${seconds < 10 ? '0' : ""}${seconds}`;
}

function markCompleted(id){
    const taskId = tasks.findIndex((task) => task.id === id);
    tasks[taskId].completed = true;
}

function startBreak(id){
    time = 5 * 60;
    taskName.textContent = 'Break';
    timerBreak = setInterval(() =>{
        timeBreakHandler(id);
    });
}

function timeBreakHandler(id){
    time --;
    getTime(id);

    if (time === 0){
        clearInterval(timerBreak);
        timerBreak = null;
        current = null;
        taskName.textContent = '';
        getTime(id);
    }
}