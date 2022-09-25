let radius = prompt('Bán kính của hình tròn là: ');
let c = 2 * radius * Math.PI;
let s = Math.pow(radius, 2) * Math.PI;

document.write('Chu vi hình tròn: ' + c + "<br>");
document.write('Diện tích hình tròn: ' + s);