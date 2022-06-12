var numb1 = 2;
var numb2 = 5;
var numb3 = 8;
var numb4 = 9;
var numb5 = 17;
var numb6 = 11232137;



function iSItAPrimeNumber(numb) {
    var count = 0;
    for (var i=2; i<=numb-1; i++){
        
        var divisior = numb % i;
        if (divisior === 0) {
            count = count +1;
        }}
        
        
        if  (count === 0){console.log(numb + " is a prime number")
        } else {
            console.log(numb + " is not a prime number")
        }
    
}

iSItAPrimeNumber(numb1);
iSItAPrimeNumber(numb2);
iSItAPrimeNumber(numb3);
iSItAPrimeNumber(numb4);
iSItAPrimeNumber(numb5);
iSItAPrimeNumber(numb6);