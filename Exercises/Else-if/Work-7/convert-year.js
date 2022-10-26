function year (year){
    let currentYear = document.getElementById(year).value;
    let canchiResult = "";

    switch (currentYear % 10) {
        case 0:
            canchiResult += "Canh";
            break;
        case 1:
            canchiResult += "Tân";
            break;
        case 2:
            canchiResult += "Nhâm";
            break;
        case 3:
            canchiResult += "Quý";
            break;
        case 4:
            canchiResult += "Giáp";
            break;
        case 5:
            canchiResult += "Ất";
            break;
        case 6:
            canchiResult += "Bính";
            break;
        case 7:
            canchiResult += "Đinh";
            break;
        case 8:
            canchiResult += "Mậu";
            break;
        case 9:
            canchiResult += "Kỷ";
            break;
        default:
            canchiResult =  "Ký tự đã nhập không hợp lệ, vui lòng nhập đúng số năm.";
    }

    switch (currentYear % 12) {
        case 0:
            canchiResult += " Thân";
            break;
        case 1:
            canchiResult += " Dậu";
            break;
        case 2:
            canchiResult += " Tuất";
            break;
        case 3:
            canchiResult += " Hợi";
            break;
        case 4:
            canchiResult += " Tý";
            break;
        case 5:
            canchiResult += " Sửu";
            break;
        case 6:
            canchiResult += " Dần";
            break;
        case 7:
            canchiResult += " Mẹo";
            break;
        case 8:
            canchiResult += " Thìn";
            break;
        case 9:
            canchiResult += " Tỵ";
            break;
        case 10:
            canchiResult += " Ngọ";
            break;
        case 11:
            canchiResult += " Mùi";
            break;
        default:
            canchiResult =  "Ký tự đã nhập không hợp lệ, vui lòng nhập đúng số năm.";
    }

    document.getElementById('CanChi').innerHTML = canchiResult;
}