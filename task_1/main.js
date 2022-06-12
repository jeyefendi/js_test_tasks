var arr= ["Москва", "Санкт-Петербург", "Воронеж"];
var arr1 = ["Town1", "Town2", "etc."];
var capitals = ["London", "Minsk", "Paris", "Berlin"];
var number =  23234;



function  Comma(towns) {
    if (Array.isArray(towns)){
    var result = (towns.join(", ")+".");
    return result;
    }
    return 'It`s not an array';
}



console.log(Comma(arr));
console.log(Comma(arr1));
console.log(Comma(capitals));
console.log(Comma(number));
