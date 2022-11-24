
let temp = +prompt("Enter temperature: ");

do{
    if(temp >= 20){
        break;
    } else {
        temp = +prompt("Please increase the temperature: ");
    }
} while(temp <20);

do {
    if(temp <= 100){
        break;
    }else{
        temp = +prompt("Please decrease the temperature: ");
    }
} while(temp > 100);

alert("The temperature is perfect!");

