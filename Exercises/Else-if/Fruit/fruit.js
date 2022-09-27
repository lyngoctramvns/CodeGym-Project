function checkPrice (){
    let fruitType = document.getElementById('input').value;
    let result = '';

    switch(fruitType){
        case 'Ổi':
        case 'Dưa Hấu':
            result = '20000 VND/kg';
            break;
        case 'Táo':
        case 'Xoài':
            result = '30000 VND/kg';
            break;
        case 'Cam':
        case 'Chôm Chôm':
            result = '40000 VND/kg';
            break;
        case 'Măng Cụt':
            result = '50000 VND/kg';
            break;
        default:
            result = 'Không có giá cho loại quả này/ Trường nhập vào không hợp lệ';
    };

    document.getElementById('rs').innerHTML = result;
}