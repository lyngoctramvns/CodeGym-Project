function triangleAsc(){

  let row = "";

  for(i=0;i< 5;i++){
    let newrow = row + "*"
    row = newrow
    document.write(row);
    document.write('</br>');
  }
}


function triangleDecs(){

  let row = "******"

  for (let i=0;i<5;i++){
    let newrow = row.replace("*","");
    row = newrow;
    document.write(row);
    document.write('</br>');
  }

}


triangleAsc();
document.write("</br>");
triangleDecs();
document.write("</br>");
triangleAsc();
document.write("</br>");
triangleDecs();