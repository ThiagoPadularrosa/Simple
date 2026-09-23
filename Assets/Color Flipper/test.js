const btn = document.getElementById("btn"); // el botón
const colorName = document.getElementById("color-name"); // el texto del 
const simpleBtn = document.getElementById("smp"); // el botón simple
const hexBtn = document.getElementById("hex"); // el botón hex 
const texto = document.getElementById("color-name"); // el texto del color hexadecimal

let mode = "simple"; // modo inicial

texto.style.color = "#49a6e9"; // Cambia el color del texto a azul

// Array de colores para cambiar el fondo
const colors = ["Red", "Blue", "Green", "Yellow", "Pink", "Purple", "Orange", "Brown", "Gray", "Cyan", "Magenta"];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length); // obtiene un índice aleatorio
    return colors[randomIndex]; // devuelve el color correspondiente al índice  
} 
function getRandomHexColor() {
    const hex = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
    return hex; // genera un color hexadecimal aleatorio
}

// Evento que escucha el click en el botón
btn.addEventListener("click", function() {
    const randomColor = getRandomColor(); // obtiene un color aleatorio
    document.body.style.backgroundColor = randomColor; // cambia el fondo del body
    btn.style.backgroundColor = randomColor 
    colorName.textContent = randomColor; // actualiza el texto con el nombre del color
});

smp.addEventListener("click", function() {


});
    

