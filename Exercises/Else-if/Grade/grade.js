function calculate() {
    let math = +document.getElementById('math').value;
    let literature = +document.getElementById('literature').value;
    let english = +document.getElementById('english').value;
    let region = document.getElementById('region').value;

    let subjects = math + literature + english;
    let result = 0;

    

    switch (region) {
        case 'KV1':
            result = subjects + 0.75;
            break;
        case 'KV2':
            result = subjects + 0.25
            break;
        case 'KV2-NT':
            result = subjects + 0.5;
            break;
        default:
            result = subjects + 0;
    };

    if (math >= 0 && literature >= 0 && english >= 0 && math <= 10 && literature <= 10 && english <= 10) {
        document.getElementById('result').innerHTML = "Tổng điểm ĐH khối D của bạn là: " + result;
    } else {
        document.getElementById('result').innerHTML = "Số điểm 3 môn đã nhập không hợp lệ";
    };

    
    
}