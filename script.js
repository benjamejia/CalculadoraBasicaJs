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
const displayOperador = document.getElementById("operador");

const botones = document.querySelectorAll(".boton");

let valoresInput = [];
let valoresTemporales = "";
let operadorTemporal = ""; 

botones.forEach((boton) => {  
    boton.addEventListener("click", () => {
        display.value += boton.textContent;
        capturarNumero(boton.textContent);
    })
})
 
capturarNumero = (operador) => {
   let valorInput = parseInt(operador);
   
    switch(valorInput){
        case 0: case 1: case 2: case 3: case 4:
        case 5: case 6: case 7: case 8: case 9:
           valoresTemporales = valoresTemporales + operador;
           console.log(valoresTemporales);
           display.value = valoresTemporales;
           break;
        default: 
           switch(operador) {
               case "+":
                    operadorTemporal = operador;
                    valoresInput.push(parseInt(valoresTemporales));
                    displayOperador.value = valoresInput[0] + "+";

                    if (valoresInput[0] != undefined && valoresInput[1] != undefined) {
                        let resultado = parseInt(valoresInput[0]) + parseInt(valoresInput[1]);

                        display.value = resultado;
                        displayOperador.value = valoresInput[0] + "+" + valoresInput[1];

                        valoresInput.pop();
                        valoresInput[0] = resultado;

                    }
                   valoresTemporales = "";
                   break;
               case "-":
                    operadorTemporal = operador;
                    valoresInput.push(parseInt(valoresTemporales));
                    console.log(valoresInput[1]);
                    displayOperador.value = valoresInput[0] + "-";

                    if (valoresInput[0] != undefined && valoresInput[1] != undefined) {
                        let resultado = parseInt(valoresInput[0]) - parseInt(valoresInput[1]);

                        display.value = resultado;
                        displayOperador.value = valoresInput[0] + "-" + valoresInput[1]
                        
                        valoresInput.pop();
                        valoresInput[0] = resultado;
                    }
                   valoresTemporales = "";
                   break;
                case "C":
                   display.value = "";
                   valoresInput = [];
                   valoresTemporales = "";
                   displayOperador.value = "";
                   break;
               case "/":
                   display.value = "division";
                   break;
                case "+":
                   display.value = "esto es una suma";
                   break;
               case "*":
                   display.value = "multiplicacion";
                   break;   
                case "+":
                   display.value = "esto es una suma";
                   break;
               case "DEL":
                   display.value = "eliminar";
                   break;  
                case "+":
                   display.value = "esto es una suma";
                   break;
               case "=":
                   if(operadorTemporal == "+"){
                    if(valoresInput[0] != undefined && valoresInput[1] != undefined){
                        let resultado = parseInt(valoresInput[0]) + parseInt(valoresInput[1]);
                        
                        display.value = resultado;
                        displayOperador.value = valoresInput[0] + "+" + valoresInput[1]
                        
                        valoresInput.pop();
                        valoresInput[0] = resultado;
                        valoresTemporales = "";
                        break;
                    }

                    let resultado = parseInt(valoresInput[0]) + parseInt(valoresTemporales);
                    display.value = resultado;
                    displayOperador.value = valoresInput[0] + "+" + valoresTemporales;
                    valoresTemporales = "";
                    valoresInput[0] = resultado;

                   } else if(operadorTemporal == "-") {
                    if(valoresInput[0] != undefined && valoresInput[1] != undefined){
                        let resultado = parseInt(valoresInput[0]) - parseInt(valoresInput[1]);
                       
                        display.value = resultado;
                        displayOperador.value = valoresInput[0] + "-" + valoresInput[1]
                       
                        valoresInput.pop();
                        valoresInput[0] = resultado;
                        valoresTemporales = "";
                        break;
                    }

                    let resultado = parseInt(valoresInput[0]) - parseInt(valoresTemporales);
                    display.value = resultado;
                    displayOperador.value = valoresInput[0] + "-" + valoresTemporales;
                    valoresTemporales = "";
                    valoresInput[0] = resultado;

                   }
                   break;    
           }
           break;
    }
}

function adicion(){
    let resultado = 0;
    for(let i = 0; i < valoresInput.length; i++){
        resultado = resultado + parseInt(valoresInput[i]);
    }
    display.value = resultado;
}

function sustraccion(){
    let resultado = 0;
    for(let i = 0; i < valoresInput.length; i++){
        resultado = resultado - parseInt(valoresInput[i]);
    }
    display.value = resultado;
}

function multipliacion(){
    let resultado = 0;
    for(let i = 0; i < valoresInput.length; i++){
        resultado = resultado * parseInt(valoresInput[i]);
    }
    display.value = resultado;
}

function division(){
    let resultado = 0;
    for(let i = 0; i < valoresInput.length; i++){
        resultado = resultado / parseInt(valoresInput[i]);
    }
    display.value = resultado;
}
