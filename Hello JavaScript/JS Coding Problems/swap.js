let first = 5;
let second = 7;
console.log(first, second);//5 7

const temp = first;
first = second;
second = temp;

console.log(first, second);//7 5


// using destructuring

[first, second] = [second, first];
console.log(first, second);