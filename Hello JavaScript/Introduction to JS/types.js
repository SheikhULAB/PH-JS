var price = 100;

console.log(typeof price); // number

var price = '100';
console.log(typeof price); // string

var isHappy = true;
console.log(typeof isHappy); // boolean

var romantic;
console.log(typeof romantic); // undefined

var zero = null;
console.log(typeof zero); // object

// javascript is dynamic typing

// data types: 
// 1. Primitive: 
//        Number
//        String
//        Undefined
//        Null
//        Boolean 
// 2.Non-Primitive:
//        Object 
//        Array
//        Function

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum); // 0.30000000000000004

sum = sum.toFixed(2); // return a string
console.log(sum); // 0.30
console.log(typeof sum); //string

sum = parseFloat(sum);
console.log(typeof sum); // number

       