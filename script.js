const display = document.getElementById("displayValue");
const displayOperador = document.getElementById("operador");

const botones = document.querySelectorAll(".boton");
let primerNumero = null;
let segundoNumero = null;
let operadorPendiente = null;
let resultadoOperacion = null;

botones.forEach((boton) => {  
    boton.addEventListener("click", () => {
        display.value += boton.textContent;
        capturarNumero(boton.textContent);
        if(boton.textContent == "C"){
            LimpiarDatos();
        }
    })
})
 
function LimpiarDatos(){
    primerNumero = null;
    segundoNumero = null;
    operadorPendiente = null;
    resultadoOperacion = null;
    display.value = "";
} 

let capturarNumero = (operador) => {
    if(!isNaN(Number(operador))){
        //aqui verificamos si hay un operador seleccionado sino para capturar el primer numero
        if(operadorPendiente == null){
            //aqui verificamos si hay un resultado previo para tomarlo como primer numero
            if(resultadoOperacion != null){
                display.value = "";
                primerNumero = resultadoOperacion;
                resultadoOperacion = null;
            }else{
                primerNumero = display.value;
                resultadoOperacion = null;
            }
        }else{ 
            if(resultadoOperacion != null){
                primerNumero = resultadoOperacion;
                resultadoOperacion = null;
                segundoNumero = display.value;
            }else{
                segundoNumero = display.value;
            }
        }
    }else{
        if(operador == "="){
            Calcular(primerNumero,segundoNumero,operadorPendiente);
            resultadoOperacion = display.value;
            operadorPendiente = null;
            operador = null;
            displayOperador.value = null;
        }else{
            operadorPendiente = operador;
            displayOperador.value = operador;
            display.value = "";
        }
    }
}

function Calcular(num1,num2,operador){
   //tenemos que guardar el primer numero
   //tenemos que guardar el operador y limpiar la pantalla
   // presionamos igual para mostrar resultado, se usa el primer numero, el operador y el segundo numero
   if(isNaN(Number(num1)) || isNaN(Number(num2))){
    display.value = "";
    return;
   }else if(operador == "+"){
    display.value = +num1 + +num2;
   }else if(operador == "-"){
    display.value = +num1 - +num2;
   }else if(operador == "*"){
    display.value = +num1 * +num2;
   }else if(operador == "/"){
    display.value = +num1 / +num2;
   }
}

