var displayOperator = document.getElementById("operator1");
var displayValue1 = document.getElementById("value1");
var displayValue2 = document.getElementById("value2");
var display = document.getElementById("display");
var numberSelector = document.querySelectorAll(".number");
var operatorSelector = document.querySelectorAll(".numberOperator");


numberSelector.forEach(item => {
    item.addEventListener("click", numberClick);
});

operatorSelector.forEach(item => {
    item.addEventListener("click", operatorClick);
});

function numberClick(event){
    var number = event.currentTarget.innerText;
    console.log("numero pressionado: " + number);
    display.innerText = display.innerText + number;
}

function operatorClick(event){
    var operator = event.currentTarget.innerText;
    switch(operator){
        case '*':
        case '-':
        case '+':
            displayValue1.innerText = display.innerText;
            display.innerText = '';
            displayOperator.innerText = operator;
            break;
        case '=':
            // aqui vai ser o resultado da conta final.
            displayValue2.innerText = display.innerText;
            var resultado = calcular(displayValue1.innerText, displayOperator.innerText, displayValue2.innerText);
            limparCampos();
            display.innerText = resultado;
            break;
        case 'C':
            // aqui vai limpar tudo.
            limparCampos();
            break;
        case ',':
            // aqui vai ser a virgula.
            break;
        default:
            // operador que passou está inválido.
    }
}

function calcular(v1, operador, v2){
    var resultado = 0;
    switch(operador)
    {
        case '*':
            resultado = parseInt(v1) * parseInt(v2);
            break;
        case '-':
            resultado = parseInt(v1) - parseInt(v2);
            break;
        case '+':
            resultado = parseInt(v1) + parseInt(v2);
            break;
    }
    return resultado;
}

function limparCampos(){
    display.innerText = '';
    displayValue1.innerText = '';
    displayValue2.innerText = '';
    displayOperator.innerText = '';
}