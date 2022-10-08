let year = parseInt(prompt('Điền số năm bạn muốn:'));

if(year % 4 != 0){
    alert('Năm này không phải năm nhuận.')

}else {
    if(year % 100 != 0){
        alert('Năm nay là năm nhuận.')
    } else if (year % 100 == 0 && year % 400 != 0){
        alert('Năm nay không phải năm nhuận.')
    }else{
        alert('Năm nay là năm nhuận.')
    }
}