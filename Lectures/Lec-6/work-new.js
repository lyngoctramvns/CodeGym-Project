let numberOne = +document.getElementById('num1');
    
let numberTwo = +document.getElementById('num2');

function sum(cal){
    document.getElementById('result').innerHTML = "Result: " + eval(`${numberOne.value}` + cal + `${numberTwo.value}`);
};