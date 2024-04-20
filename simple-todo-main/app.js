document.getElementById('formTask').addEventListener('submit', addTask);

function addTask(e){
    let title = document.getElementById('titleTask').value;
    let description = document.getElementById('descriptionTask').value;

    if(title !== ""){
        const task = {
            title: title,
            description: description
        }

        if (localStorage.getItem('tasks') === null){
            let tasks = [];
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }else{
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }else{
        alert('Title should be not empty');
    }

    //Visualizar tareas
    getTasks();

    //Reiniciar el formulario
    document.getElementById('formTask').reset();

    //Quita el comportamiento por defecto del formulario -> no enviar datos a un servidor
    e.preventDefault();
}

function getTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let taskView = document.getElementById('tasks');
    
    taskView.innerHTML = '';

    for(let i = 0; i < tasks.length; i++ ){
        const title = tasks[i].title;
        const description = tasks[i].description;

        taskView.innerHTML += `
        <div class='card mt-5'>
            <div class='card-header text-center'>Task #${i+1}</div>
            <div class='card-body'>
                <p class='form-control'>${title}</p>
                <p class='form-control pt-2'>${description}</p>
                <a class='btn btn-danger' onclick="deleteTask('${title}')">
                    <i class="fa-solid fa-trash"></i> Delete
                </a>    
            </div>
        </div>
        `
        // console.log(tasks[i]);
    }
}

function deleteTask(title){
    console.log(title);
    let tasks = JSON.parse(localStorage.getItem('tasks'));

    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].title == title){
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}

//Visualizar tareas
getTasks();
