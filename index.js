// prueba fetch

fetch("https://swapi.dev/api/films/")
.then(respuesta => respuesta.json())
.then(data =>  {
    console.log(data)
})

.catch( () => {
    console.log("Algo salió mal")
})


