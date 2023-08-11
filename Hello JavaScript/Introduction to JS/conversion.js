var price1 = '31';
var price2 = '10';

var totalPrice = price1 + price2;
console.log(totalPrice); //3110



var price1 = '31';
var price2 = 10;

var totalPrice = price1 + price2;
console.log(totalPrice); //3110

var price1 = 31;
var price2 = '10';

var totalPrice = price1 + price2;
console.log(totalPrice); //3110


//convert string to number

price1 = parseInt(price1);
price2 = parseInt(price2);
totalPrice = price1 + price2;
console.log(totalPrice); //41


var gpa = '3.41';
var gpaNum = parseInt(gpa);
console.log(gpaNum); // 3

var gpa = '3.41';
var gpaNum = parseFloat(gpa);
console.log(gpaNum); // 3.41