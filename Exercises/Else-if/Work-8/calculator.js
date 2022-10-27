//declare variable number 1, number 2 and operator
let number1, number2, display;

//Check condition
function number(num) {
    //if number1,number2 and the operator existed, then the number enter next will combine with number 2 (e.g 12+ 23 then click 3 => 12 + 233)
    if (number1 && display && number2) {
        number2 += `${num}`;
        number2 = parseInt(number2);
        document.getElementById('calculator-display').value = number2;
    //if only number1 and operator exist, then the number value entered will be number2
    }else if (number1 && display){
        number2 = num;
        document.getElementById('calculator-display').value = number2;
    }else{
        //if only number1 exist, which means no operator yet, then the next number will be joining the first number
            if (number1){
                number1 += `${num}`;
                number1 = parseInt(number1);
                document.getElementById('calculator-display').value = number1;
        //otherwise number2 will be generated
            } else {
                number1 = num;
                document.getElementById('calculator-display').value = number1;
            };
        
    };

};


function inputOperator(input){
    //if there are either number1 or number2, then the operator(+,-,x,/) can be entered
    if(number1 || number2){
    display = input;
    document.getElementById('calculator-display').value = input;
    //otherwise they will be prevented from being entered
    }else {
        let operation = document.getElementById(`${input}`);
        operation.addEventListener("click", optClick, false);
        function optClick(event) {
          let warn = "Please enter a number first!";
          alert(warn);
          event.preventDefault();
        }   
    };
};

//the math will be calculate depends on which operator was clicked
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
    //Deliver the result
    document.getElementById('calculator-display').value = `${number1}` + `${display}` + `${number2}` + "=" + `${result}`;
};

//Note: This computer still has limitation, as it can only add upto 2 numbers;