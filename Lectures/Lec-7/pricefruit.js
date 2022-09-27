function checkPrice (){
    let fruitType = document.getElementById('input').value;
    let result = '';

    if (fruitType == 'Ổi' || fruitType == 'Dưa hấu') {
        result = '20000 VND/kg';
    } else if (fruitType == 'Táo' || fruitType == 'Xoài'){
        result = '30000 VND/kg'
    } else {
        if(fruitType == 'Cam' || fruitType == 'Chôm Chôm'){
            result = '40000 VND/kg';
        }else if (fruitType == 'Măng Cụt'){
            result = '50000 VND/kg';
        } else {
            result = 'Không có giá cho loại quả này/ Trường nhập vào không hợp lệ';
        }
    };

    document.getElementById('rs').innerHTML = result;
}