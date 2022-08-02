let segundos = 0;


function setTime() {  
    segundos = prompt("Ingresa los segundos a contar (entre 0 y 60):");
    console.log("Valor ingresado:" + segundos + " segundos.");
    let validacion = false;
    while (validacion == false) {
        if (segundos < 0 || segundos > 60) {
            alert("El temporizador funciona para valores entre 0 y 60 segundos")
            console.log("validación: funciona con valores entre 0 y 60");
            segundos = prompt("Ingresa los segundos a contar (entre 0 y 60):");

        } else if (segundos == "" || segundos == null) {
            alert("No has ingresado un valor.");
            console.log("validación: no ingresó valor");
            segundos = prompt("Ingresa los segundos a contar (entre 0 y 60):");
        } else if (isNaN(segundos)) {
            alert("El temporizador funciona con números enteros.");
            console.log("validación: el valor ingresado no es un número");
            segundos = prompt("Ingresa los segundos a contar (entre 0 y 60):");

        } else if ((segundos % 1) != 0) {
            alert("El temporizador funciona con números enteros.");
            console.log("validación: el valor ingresado no es un número entero");
            segundos = prompt("Ingresa los segundos a contar (entre 0 y 60):");
        }
        else {
            validacion = true;
        }

    }
    updateTime();
}

function updateTime() {   
    document.getElementById('tiempo').innerHTML = segundos + " segundos";
    if(segundos == 0) {
        alert('Se terminó el tiempo');
    } else {
        segundos--;
        setTimeout("updateTime()", 1000);
    }
}


let tarea = '';

function setTareas() {
    const tareas = [];
    do {
        tarea = prompt("Ingresa una tarea (presiona ESC o Cancelar para finalizar):");
        console.log('Tarea ingresada:' + tarea);
        if(tarea != null && tarea != '') {
            tareas.push(tarea);
        }
    } while (tarea != null && tarea != '');
 
    console.log('Lista de tareas: ' + tareas.join(" - "));
    console.log('Cantidad de tareas: ' + tareas.length);

    for (let i = 0; i < tareas.length; i++) {
        console.log(`Tarea nro. ${i+1}: ${tareas[i]}`);
    }

    if(tareas.length > 0) {
        alert('Lista de tareas: ' + tareas.join(" - "));
    } else {
        alert('La lista de tareas está vacía. Disfruta de tu día!!!');
    }
    
}

class UserStory {
    constructor(tituloUserStory, estadoUserStory, estimacionUserStory, responsableUserStory) {
        this.tituloUserStory = tituloUserStory;
        this.estadoUserStory = estadoUserStory;
        this.estimacionUserStory = estimacionUserStory;
        this.responsableUserStory = responsableUserStory;
    }

    mostrar(salida){
        if (salida === "consola") {
            console.log("----------------------------");
            console.log("Título de la historia de usuario: " + this.tituloUserStory);
            console.log("Estado: " + this.estadoUserStory);
            console.log("Estimación: " + this.estimacionUserStory);
            console.log("Responsable: " + this.responsableUserStory);
        } else if (salida === "pantalla") {
            alert(`Título de la historia de usuario: ${this.tituloUserStory} ${"\n"}Estado: ${this.estadoUserStory} ${"\n"}Estimación: ${this.estimacionUserStory} ${"\n"}Responsable: ${this.responsableUserStory}`);
        }
        
    }


}

const stories = [];

function crearUserStory () {
    const titulo = prompt("Ingresa el título de la user story:");
    const estado = prompt("Ingresa el estado inicial: ");
    const estimacion = Number (prompt("Ingresa la estimación en horas: "));
    const responsable = prompt("Ingresa el responsable: ");
    
    stories.push(new UserStory(titulo, estado, estimacion, responsable));
}
    
function verUserStory () {
    if (stories.length > 0){
        for (const story  of stories) {
            story.mostrar("consola");
            story.mostrar("pantalla");
        }       
    } else {
        console.log("Aún no agregaste historias de usuario");
        alert("Aún no agregaste historias de usuario");
    }
}


// Probando DOM

const formulario = document.querySelector("#user-stories");
const inputNombreHistorias = document.querySelector("#input-nombre-historia");

console.log(formulario, inputNombreHistorias);

let historias = [];

const pushearNombreHistorias = (array, valor) => {
    array.push(valor);
}

formulario.onsubmit = (event) => {
    event.preventDefault();
    pushearNombreHistorias(historias, inputNombreHistorias.value);
    formulario.reset();
    console.log(historias);
}
