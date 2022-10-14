function convertCurrency() {
    let money = document.getElementById('amount').value;

    let fromCurrency = document.getElementById('from-currency').value;
    let toCurrency = document.getElementById('to-currency').value;

    money = +money
    //Tỉ giá của VND với USD ở thời điểm hiện tại là 1 usd = 24,150VND
    if(fromCurrency == "Vietnam" && toCurrency == "USD"){
        
        document.getElementById('convert-result').innerHTML = "Result: " + money * 0.000041408 + " USD";
    } else if (fromCurrency == "USD" && toCurrency == "Vietnam") {
        document.getElementById('convert-result').innerHTML = "Result: " + money * 24150 + " VND";
    } else {
        if (fromCurrency == "Vietnam") {
            document.getElementById('convert-result').innerHTML = "Result: " + money + " VND";
        } else {
            document.getElementById('convert-result').innerHTML = "Result: " + money + " USD";
        }
        
    };

};