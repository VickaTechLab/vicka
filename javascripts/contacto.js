let contacto = []

class Contacto{
    constructor(nombre, email, asunto, mensaje){
        this.nombre = nombre;
        this.email = email;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }
}

const formularioContacto = document.querySelector("#formulario-contacto");
const datoNombre = document.querySelector("#dato-nombre");
const datoEmail = document.querySelector("#dato-email");
const datoAsunto = document.querySelector("#dato-asunto");
const datoMensaje = document.querySelector("#dato-mensaje");
let btnEnviarMensaje = document.querySelector("#enviar-mensaje");

btnEnviarMensaje.addEventListener("click", validarFormularioContacto);

function validarFormularioContacto(){
    console.log("validar formulario");
}