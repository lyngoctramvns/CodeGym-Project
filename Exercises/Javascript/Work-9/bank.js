let loan = prompt('Số tiền vay: ');
let year = prompt('Số năm vay: ');
let interest = prompt('Lãi suất: ');

let moneyInterest = loan * (interest/100);


let returnmoney = parseInt(loan) + year * moneyInterest;

document.write('Số tiền phải trả là: ' + loan.toString() + '+' + year.toString() + 'x' + moneyInterest.toString() + '=' + returnmoney.toString());