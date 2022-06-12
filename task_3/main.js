var numb1 = 25;
var numb2 = 41;
var numb3 = 1048;
var numb4 = 104;
var numb5 = 6.5;


function naming(int) {
    var myNum = String(int);
    var myNumArr = [];
    for (var i = 0; i < myNum.length; i++) {
        myNumArr.push(myNum.charAt(i));
    }
    
    var endPosition = myNumArr[myNumArr.length-1];
    var penultPosition = myNumArr[myNumArr.length-2];
    
    if ((endPosition >=5 && endPosition <= 9) ||  (endPosition === "0") ||
        (endPosition ==1 && penultPosition == 1) ||
        (endPosition >=2 && endPosition <= 4 && penultPosition == 1)
    ){
        console.log (int +" компьютеров");}
        
    if (endPosition == 1 && penultPosition !=1) {
        console.log (int + " компьютер")}
    
    if (endPosition >=2 && endPosition <= 4 && penultPosition != 1) {
        console.log(int + " компьютера")
    }
  
}
naming(numb1);
naming(numb2);
naming(numb3);
naming(numb4);
naming(numb5);