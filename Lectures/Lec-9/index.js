let chu = ['Mươi', 'Mốt', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín'];

let so = prompt("Nhập số sau: ");

let kq = '';

if (so == "") {
    alert('Nhập lại');
} else if (so < 0 || so > 99) {
    alert('Chỉ nhập số từ 0-99');
} else {
so = +so;
if (so < 10) {
switch (so) {
    case 0:
        alert("Không");
        break;
    case 1:
        alert("Một")
        break;
    default:
        alert(chu[so]);
}
} else if (so < 20) {
    kq += 'Mười '
    switch (so % 10) {
        case 0:
            kq += "";
            break;
        case 1:
            kq += "Một";
        case 5:
            kq += "Lăm";
            break;
        default:
            kq += chu[so%10];
    }
} else {
    let hangChuc = parseInt(so/10)
    let hangDV = so % 10;
    kq += chu[hangChuc] + chu[0];

    switch(hangDV){
        case 0:
            break;
        case 5:
            kq = kq + 'Lăm';
            break;
        default:
            kq = kq + chu[hangDV];

    }
}
alert(kq)

};