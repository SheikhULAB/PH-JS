//1+2+3+4+5..

function sumOfNumbers(number) {
let sum = 0;
for(let i = 1; i <= number; i++) {
    sum = sum + i;
    console.log(sum);
}
return sum;
}
sumOfNumbers(7);