const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


const modal1 = document.getElementById("mimodal1")
const btnopen1 = document.getElementById("btnopen1");
const btnclose1 = document.getElementById("btnclose1")

const modal2 = document.getElementById("mimodal2");
const btnopen2 = document.getElementById("btnopen2");
const btnclose2 = document.getElementById("btnclose2");




let display = document.getElementById("display");
let numero = parseInt(display.innerText);
let count = 0;

addEventListener("click", () => {
    if (event.target === btn1) {
        count--;
    } else if (event.target === btn2) {
        count = 0;
    }
    else if (event.target === btn3) {
        count++;
    }
    
    display.textContent = count;

    if (count > 0) {
        display.style.color = "#13d113";
    } else if (count < 0) {
        display.style.color = "red";
    } else {
        display.style.color = "black";
    }
});


//A partir de aca es para abrir y cerrar el modal//
btnopen1.addEventListener("click", ()=> {modal1.showModal ();});

btnclose1.addEventListener("click", () => {modal1.close();});

btnopen2.addEventListener("click", () => {modal2.showModal ();});

btnclose2.addEventListener("click", () => {modal2.close ();});



