var numb1 = 27;
var numb2 = 27.8;
var numb3 =41.7;
var numb4 = 45;
var numb5 = -11.552;
var numb6 = 0.2;

function roundNumb(numb) {
    var remainderOfFive = numb % 5;
   
    if (remainderOfFive === 0) {
        return numb;
    } else if (remainderOfFive >= 2.5) {
        return (numb-remainderOfFive+5);
    } else {
        if (remainderOfFive < 2.5){
        return (numb-remainderOfFive)}
    }
    }

    
    console.log(roundNumb(numb1));
    console.log(roundNumb(numb2));
    console.log(roundNumb(numb3));
    console.log(roundNumb(numb4));
    console.log(roundNumb(numb5));
    console.log(roundNumb(numb6));
