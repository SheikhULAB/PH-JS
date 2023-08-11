var numbers = [15, 68, 78, 56, 89, 98];

//get element by index

console.log(numbers); //[ 15, 68, 78, 56, 89, 98 ]

//find index of elemts
console.log(numbers[0]);//15
console.log(numbers[1]);//68
console.log(numbers[2]);//78
console.log(numbers[3]);//56
console.log(numbers[4]);//89
console.log(numbers[5]);//98

var secondElement = numbers[1];
console.log(secondElement);// 68

//mutate array / set element value by index
numbers[1] = 77;
console.log(numbers);//[ 15, 77, 78, 56, 89, 98 ]

numbers[3] = 44;

//find index

var positionIndex = numbers.indexOf(89);
console.log(positionIndex);//4

var positionIndex2 = numbers.indexOf(188);
console.log(positionIndex2);// -1 na thakle 

