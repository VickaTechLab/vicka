const form = document.querySelector("#comments");
const titulo = document.querySelector("#titulo-comentario");
const comentario = document.querySelector("#comentario");


form.onsubmit = (event) => {

    event.preventDedault();
    console.log("guardando")
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: document.getElementById("titulo-comentario").value,
        body: document.getElementById("comentario").value,
        userID: 10,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
    console.log(json)
    })
    .catch( () => {
    console.log("algo salió mal")
    })
}
/*

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => console.log(json));

*/

