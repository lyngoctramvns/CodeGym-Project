let a = +prompt('Enter number a: ');
let b = +prompt('Enter number b: ');
let sum = null;

if(a < 0 || b < 0){
    alert('Please enter numbers larger than 0.')
} else if (a > b) {
    alert('Number b must be larger than number a.')
} else {

    for (let i = 1; i < b; i++) {

        sum += b-i;
    
        if((b - i) == (a + 1)){
            alert(sum);
            break;
        } else {
    
        }
    }    
}


