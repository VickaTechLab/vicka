
let inputSegundos = 0
const setTime = () =>{
    inputSegundos = document.getElementById("input_segundos").value; 
    
    if (isNaN(inputSegundos)) {
        document.getElementById("errorTempo").innerHTML = "El valor ingresado es incorrecto. El temporizador funciona con números enteros.";
    } else if (inputSegundos < 1 || inputSegundos > 120) {
        document.getElementById("errorTempo").innerHTML = "El temporizador funciona para valores entre 1 y 120 segundos.";
    } else if (inputSegundos == "" || inputSegundos == null) {
        document.getElementById("errorTempo").innerHTML = "No has ingresado un valor.";
    } else if ((inputSegundos % 1) != 0) {
        document.getElementById("errorTempo").innerHTML = "El temporizador funciona con números enteros.";
    } else {
        document.getElementById("errorTempo").innerHTML = ""
        updateTime();
    }

}

function updateTime() {   
    document.getElementById("tiempo").innerHTML = `${inputSegundos} segundos`; 
    if(inputSegundos == 0) {
        document.getElementById("tiempo").innerHTML = `${inputSegundos} segundos. Se terminó el tiempo!`;
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

formulario.onsubmit = (event) => {
    event.preventDefault();
    pushearNombreHistorias(historias, inputNombreHistorias.value);
    formulario.reset();
    tableroHistorias.innerHTML=mostrarTablero(historias);
    subirLocalStorage("historias", historias);
    console.log(historias);
}

let historiasTraidasDelLocalStorage = traerLocalStorage("historias");
historias = historiasTraidasDelLocalStorage;

tableroHistorias.innerHTML = mostrarTablero(historias);
console.log(historias);