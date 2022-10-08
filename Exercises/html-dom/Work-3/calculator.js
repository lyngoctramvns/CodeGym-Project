function sum(){

    let numberOne = +document.getElementById('num1').value;
    
    let numberTwo = +document.getElementById('num2').value;
    document.getElementById('result').innerHTML = "Result: " + (numberOne + numberTwo);
};

function sub(){

    let numberOne = +document.getElementById('num1').value;
    
    let numberTwo = +document.getElementById('num2').value;
    document.getElementById('result').innerHTML = "Result: " + (numberOne - numberTwo);
};

function multi(){

    let numberOne = document.getElementById('num1').value;
    
    let numberTwo = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = "Result: " + (numberOne * numberTwo);
};

function div(){

    let numberOne = document.getElementById('num1').value;
    
    let numberTwo = document.getElementById('num2').value;
    document.getElementById('result').innerHTML = "Result: " + (numberOne / numberTwo);
};