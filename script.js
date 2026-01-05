const botonNumero1 = document.getElementById("number1");
const botonNumero2 = document.getElementById("number2");
const botonNumero3 = document.getElementById("number3");
const botonNumero4 = document.getElementById("number4");
const botonNumero5 = document.getElementById("number5");
const botonNumero6 = document.getElementById("number6");
const botonNumero7 = document.getElementById("number7");
const botonNumero8 = document.getElementById("number8");
const botonNumero9 = document.getElementById("number9");
const botonNumero0 = document.getElementById("number0");

const display = document.getElementById("displayValue");

const botones = document.querySelectorAll(".boton");
const operandos = ["+","-","*","=","/","DEL","C"];
let operadorIzquierdo = "";
let operadorDerecho = "";

botones.forEach((boton) => {  
    boton.addEventListener("click", () => {
        display.value += boton.textContent;
        capturarNumero(boton.textContent);
    })
})
 
capturarNumero = (operador) => { 
    operandos.forEach((operacion) => {
        if(operador == operacion){
            display.value = "";
        }
    })
}
