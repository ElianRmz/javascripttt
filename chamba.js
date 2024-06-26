let boton = document.getElementById("soyboton");
let tareaInput = document.getElementById("tare");
let listaDeTareas = document.getElementById("tareas");
let mensaje = document.getElementById("mensaje");

let listaDeArreglos = [];

function agregarTarea() {
    let tarea = tareaInput.value.trim();

    if (tarea) {
        listaDeArreglos.push(tarea);
        actualizarListaDeTareas();
        tareaInput.value = "";
        mensaje.textContent = '¡Tarea agregada!';
        mensaje.className = 'alert alert-success';
    } else {
        mensaje.textContent = 'Por favor, escribe una tarea.';
        mensaje.className = 'alert alert-danger';
    }
}

function actualizarListaDeTareas() {
    listaDeTareas.innerHTML = '';

    listaDeArreglos.forEach((tarea, index) => {
        let li = document.createElement('li');
        li.textContent = tarea;
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        let borr = document.createElement('button');
        borr.textContent = '¿Ya la hice?';
        borr.className = 'btn btn-danger btn-sm';
        borr.addEventListener('click', function() {
            borr.textContent = '¡Ya la hice!';
            if (borr.textContent == '¡Ya la hice!') {
                setTimeout(() => {
                    li.style.display = 'none';
                    
                    listaDeArreglos.splice(index, 1);
                    actualizarListaDeTareas();
                }, 1000);
            }
        });
        li.appendChild(borr);
        listaDeTareas.appendChild(li);
    });
}

boton.addEventListener("click", agregarTarea);