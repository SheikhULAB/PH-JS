// function functionName(parameters) {
//     //function body
//     //return
// }

// return values = functionName(parametersValue) knowas as arguments

function getAverage(assign1, assign2, assign3) {
    const total = assign1 + assign2 +assign3;
    const average = total / 3;
    return average;
}

const assign1Marks = 60;
const assign2Marks = 50;
const assign3Marks = 59;

// var myAverage = getAverage(assign1Marks, assign2Marks, assign3Marks);
// console.log(myAverage);//56.333333333333336

var myAverage = getAverage(assign1Marks, assign2Marks, assign3Marks);
var average = myAverage.toFixed(2);
console.log(average);//56.33


function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12,13);
const result2 = add(35, 7);
const finalResult = add(result1, result2);

console.log(finalResult); //67