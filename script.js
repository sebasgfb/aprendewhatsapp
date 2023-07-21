document.addEventListener("DOMContentLoaded", async function() {
    const response = await fetch("tutoriales.json");
    const data = await response.json();
    const tutorialsButtonsContainer = document.querySelector(".tutorials-buttons");
    const tutorialsContentContainer = document.getElementById("tutorialsList");

    data.forEach(tutorial => {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = tutorial.titulo;
        buttonElement.addEventListener("click", () => displayTutorialContent(tutorial));
        tutorialsButtonsContainer.appendChild(buttonElement);

        const tutorialElement = document.createElement("div");
        tutorialElement.innerHTML = `
            <h2>${tutorial.titulo}</h2>
            <p>${tutorial.contenido}</p>
        `;
        tutorialElement.style.display = "none";
        tutorialsContentContainer.appendChild(tutorialElement);
    });
});

function displayTutorialContent(selectedTutorial) {
    const tutorialElements = document.getElementById("tutorialsList").getElementsByTagName("div");

    Array.from(tutorialElements).forEach(element => {
        element.style.display = element.querySelector("h2").textContent === selectedTutorial.titulo ? "block" : "none";
    });
}
