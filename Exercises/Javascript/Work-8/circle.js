let radius = prompt('Bán kính của hình tròn là: ');
let c = 2 * radius * Math.PI;
let s = Math.pow(radius, 2) * Math.PI;

document.write('Đường kính hình tròn: ' + (radius * 2) + "<br>");
document.write('Chu vi hình tròn: ' + c + "<br>");
document.write('Diện tích hình tròn: ' + s);