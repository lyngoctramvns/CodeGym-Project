let arrayGrade = [0.25, 3.5, 9.0, 4.75, 6, 7, 8.5, 7.25];

function findAvg(arrayGrade){

    let arraySum = 0;
    let midGrade = 0;
    let grade = 0;
    
    for(grade >= 0; grade < arrayGrade.length; grade++){

        arraySum += arrayGrade[grade];
        midGrade += 1;

    }

    let averageGrade = arraySum/midGrade;

    console.log(averageGrade);
}

findAvg(arrayGrade);