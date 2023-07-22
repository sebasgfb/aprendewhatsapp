// Funcion asincrona - Se ejecuta cuando carga todo.
document.addEventListener("DOMContentLoaded", async function() {
    // se obtiene datos de JSON "tutoriales.json"
    const respuesta = await fetch("tutoriales.json");
    // Se convierte la respuesta en objeto Js"
    const datos = await respuesta.json();
    // Obtener el contenedor de botones y guardar en variable
    const contenedorBotonesTutoriales = document.querySelector(".tutorials-buttons");
    // Obtener el contenedor de contenido y guardar en variable
    const contenedorContenidoTutoriales = document.getElementById("tutorialsList");

    // Iterar sobre cada tutorial del JSON
    datos.forEach(tutorial => {
        // Se crea un nuevo elemento botón
        const botonElemento = document.createElement("button");
        // Establece el texto al titulo
        botonElemento.textContent = tutorial.titulo;
        // Agregar un evento de clic al botón para mostrar el contenido del tutorial
        botonElemento.addEventListener("click", () => mostrarContenidoTutorial(tutorial));
        // Agregar el botón al contenedor de botones en el DOM
        contenedorBotonesTutoriales.appendChild(botonElemento);

        // Crear un nuevo elemento <div> para mostrar el contenido
        const tutorialElemento = document.createElement("div");
        // Rellenar el contenido del <div> con información del tutorial, incluyendo título, contenido y enlace de video
        tutorialElemento.innerHTML = `
            <h2>${tutorial.titulo}</h2>
            <p>${tutorial.contenido}</p>
            <iframe width="560" height="315" src="${tutorial.videoLink}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
        // Agregar el <div> con el contenido del tutorial al contenido en el DOM
        contenedorContenidoTutoriales.appendChild(tutorialElemento);
    });
});

// Esta función muestra u oculta el contenido del tutorial seleccionado cuando se hace clic en un botón
function mostrarContenidoTutorial(tutorialSeleccionado) {
    // Obtener una lista de todos los elementos <div> dentro del contenido
    const elementosTutoriales = document.getElementById("tutorialsList").getElementsByTagName("div");

    // Iterar sobre cada elemento <div> en la lista
    Array.from(elementosTutoriales).forEach(elemento => {
        // Comparar el título del elemento <div> con el título del tutorial seleccionado
        // Si coinciden, se muestra el contenido del tutorial (display: "block"), sino, se oculta (display: "none")
        elemento.style.display = elemento.querySelector("h2").textContent === tutorialSeleccionado.titulo ? "block" : "none";
    });
}
