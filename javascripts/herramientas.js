
let inputSegundos = 0
const setTime = () =>{
    inputSegundos = document.getElementById("input_segundos").value; 
    
    if (isNaN(inputSegundos)) {
        document.getElementById("errorTempo").innerHTML = "El valor ingresado es incorrecto. El temporizador funciona con números enteros.";
        Toastify({
            text: "El valor ingresado es incorrecto :(",
            duration: 3000,
            gravity: 'bottom',
            position: 'left',
            style: {
                background: 'linear-gradient(to right, #FF3D00, #FFAB91)'
            }
        }).showToast();

    } else if (inputSegundos < 1 || inputSegundos > 120) {
        document.getElementById("errorTempo").innerHTML = "El temporizador funciona para valores entre 1 y 120 segundos.";
        Toastify({
            text: "El temporizador funciona para valores entre 1 y 120 segundos.",
            duration: 3000,
            gravity: 'bottom',
            position: 'left',
            style: {
                background: 'linear-gradient(to right, #FF3D00, #FFAB91)'
            }
        }).showToast();
    } else if (inputSegundos == "" || inputSegundos == null) {
        document.getElementById("errorTempo").innerHTML = "No has ingresado un valor.";
        Toastify({
            text: "No has ingresado un valor.",
            duration: 3000,
            gravity: 'bottom',
            position: 'left',
            style: {
                background: 'linear-gradient(to right, #FFD600, #FFF59D)'
            }
        }).showToast();
    } else if ((inputSegundos % 1) != 0) {
        document.getElementById("errorTempo").innerHTML = "El temporizador funciona con números enteros.";
        Toastify({
            text: "El temporizador funciona con números enteros.",
            duration: 3000,
            gravity: 'bottom',
            position: 'left',
            style: {
                background: 'linear-gradient(to right, #FFD600, #FFF59D)'
            }
        }).showToast();
    } else {
        document.getElementById("errorTempo").innerHTML = ""
        Toastify({
            text: "Corriendo el tiempo...",
            duration: 3000,
            gravity: 'bottom',
            position: 'left',
            style: {
                background: 'linear-gradient(to right, #00C853, #81C784)'
            }
        }).showToast();
        updateTime();
    }

}

function updateTime() {   
    document.getElementById("tiempo").innerHTML = `${inputSegundos} segundos`; 
    if(inputSegundos == 0) {
        document.getElementById("tiempo").innerHTML = `${inputSegundos} segundos. Se terminó el tiempo!`;
        swal({
            title: "¡Tiempo finalizado!",
            text: "Si quieres, puedes volver a empezar :)",
            icon: "success",
            button: "Entendido",
          });

    } else {
        inputSegundos--;
        setTimeout("updateTime()", 1000);
    }
}


const formulario = document.querySelector("#user-stories");
const inputNombreHistorias = document.querySelector("#input-nombre-historia");
const tableroHistorias = document.querySelector("#tablero");


console.log(formulario, inputNombreHistorias);

let historias = [];

const pushearNombreHistorias = (array, valor) => {
    array.push(valor);
}

const mostrarTablero = (array) => {
    const arrayATablero = array.reduce((acc, curr) => {
        return acc + `<p>${curr}</p>`
    }, "");
    console.log(arrayATablero);
    return arrayATablero;
}

const subirLocalStorage = (clave, valor) => {
    const arrayAJSON = JSON.stringify(valor);
    localStorage.setItem(clave, valor);
}

const traerLocalStorage = (clave) => {
    const arrayLS = localStorage.getItem("historias") || "[]";
    const recorrerArray = JSON.parse(arrayLS);
    return recorrerArray;
}

formulario.addEventListener("onsubmit", this.onsubmit);

formulario.onsubmit = (event) => {
    event.preventDefault();
    pushearNombreHistorias(historias, inputNombreHistorias.value);
    formulario.reset();
    tableroHistorias.innerHTML=mostrarTablero(historias);
    subirLocalStorage("historias", historias);
    console.log(historias);
    swal({
        title: "¡Buen trabajo!",
        text: "Si quieres, agregar más historias de usuario.",
        icon: "success",
        button: "Genial!",
      });
}

let historiasTraidasDelLocalStorage = traerLocalStorage("historias");
historias = historiasTraidasDelLocalStorage;

tableroHistorias.innerHTML = mostrarTablero(historias);
console.log(historias);