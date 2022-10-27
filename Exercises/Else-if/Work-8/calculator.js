let number1, number2, display;

function number(num) {
    if (display) {
        number2 = num;
        document.getElementById('calculator-display').value = number2;
    } else {
        number1 = num;
        document.getElementById('calculator-display').value = number1;
    }
};

function inputOperator(input){
    display = input;
    document.getElementById('calculator-display').value = input;
};

function clear(){
    number1 = undefined;
    number2 = undefined;
    display = undefined;
};

function calculator(){
    let result;
    if (display == '+'){
       result = number1 + number2;
    } else if (display == '-'){
        result = number1 - number2;
    } else if (display == 'x'){
        result = number1 * number2;
    } else {
        result = number1 / number2;
    }

    document.getElementById('calculator-display').value = `${number1}` + `${display}` + `${number2}` + "=" + `${result}`;
};
