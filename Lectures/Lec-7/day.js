let month = +prompt('Tháng bạn cần xem: ')

// if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//     alert('31 ngày');
// } else if (month == 2){
//     alert('28 hoặc 29 ngày');

// } else {
//     if (month == 4 || month == 6 || month == 9 || month == 11){
//         alert ('30 ngày');
//     } else  {
//         alert('không hợp lệ');
//     }; 
// };

switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert('31 ngày');
        break;
    case 2:
        alert('28 hoặc 29 ngày');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert('30 ngày');
    default:
        alert('không hợp lệ');
};
//Cấu trúc Switch-case
//Khi có break thì mới dừng lại, còn nếu không thì chạy típ