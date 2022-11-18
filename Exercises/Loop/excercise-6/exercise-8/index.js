function multiply() {

    let columnNum = 2;
    let rowNum = 1;
    let multiplyResult = null;

    for (columnNum >=2; columnNum < 10; columnNum++) {
        document.getElementById('multi-board').innerHTML += `<tr id = new-column${columnNum} >` + '</tr>';

        for (rowNum >= 1; rowNum < 11; rowNum++) {
            multiplyResult = columnNum * rowNum;
            
            let context = columnNum + 'x' + rowNum + '=' + multiplyResult;
            document.getElementById(`new-column${columnNum}`).innerHTML += '<td>' + context + '</td>';
            //In case rowNum == 10 then break out of the small loop
            if(rowNum == 10){
                break;
            } else {

            };
        }
        
        //reset rowNum to 1 for looping with columnNum++
        rowNum = 1
    };


}
multiply();