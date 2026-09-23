const btn = document.getElementById("btn"); // el botón
const Hex = document.getElementById("Hex"); // el texto del 
const simpleBtn = document.getElementById("smp"); // el botón simple
const hexBtn = document.getElementById("hex"); // el botón hex 
const texto = document.getElementById("Hex"); // el texto del color hexadecimal

let mode = "simple"; // modo inicial

texto.style.color = "#49a6e9"; // Cambia el color del texto a azul

// Array de colores para cambiar el fondo

function getRandomHexColor() {
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
    return hex; // genera un color hexadecimal aleatorio
}

// Evento que escucha el click en el botón
btn.addEventListener("click", function() {
    const randomColor = getRandomHexColor(); // obtiene un color hexadecimal aleatorio
    document.body.style.backgroundColor = randomColor; // cambia el fondo del body
    btn.style.backgroundColor = randomColor;
    Hex.textContent = randomColor; // actualiza el texto con el nombre del color
});


