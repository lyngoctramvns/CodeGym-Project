let number = +prompt("Input the destination number you want to count prime to: ");

let primeArray = [2,3,5,7,9];

if(number == 1){
    alert("This number is neither a prime nor a composite number")
} else {

    for (let i = 2; i < number; i++){
        
        for(let u = 2; u < i; u++){
            if(i % u == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || i % 9 == 0){
                break;
            } else {
                primeArray.push(i);
                break;
            }
        }
    }

    alert("Prime numbers from 1 to your input number: " + primeArray);

    let twentyArray = primeArray.slice(0,20);

    alert("20 first prime numbers on the list: " + twentyArray);

}

