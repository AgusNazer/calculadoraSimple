

let bgColors = [
    'hsl("145, 58%, 55%")',
]

const txOp1 = document.getElementById("op1")
const txOperacion = document.getElementById("operacion")
const txOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
    const operacion = txOperacion.value 
    const op1 = parseFloat(txOp1.value)
    const op2 = parseFloat(txOp2.value)

    if ((operacion == "+" || operacion =="-" || operacion == "*" || operacion == "/" )
    &&  !isNaN(op1) && !isNaN(op2)){ 
        let resultado;
        switch (operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2 
                break;
            case "/":
                resultado = op1 / op2       
        }

pResultado.style = "color:blue"
   pResultado.innerText = "= " + resultado
}else{
    pResultado.innerText = "valor no calculable"
    pResultado.style = "color:red"
 }
}
