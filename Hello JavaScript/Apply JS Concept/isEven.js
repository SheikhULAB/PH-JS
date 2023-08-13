//even
// console.log(4/2);
// console.log(98/2);
// console.log(144/2);
// console.log(1286/2);

//odd
// console.log(7/2);
// console.log(83/2);
// console.log(145/2);
// console.log(1287/2);

//even
// console.log(4%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);
// 0
// 0
// 0
// 0

//odd
// console.log(7%2);
// console.log(83%2);
// console.log(145%2);
// console.log(1287%2);
// 1
// 1
// 1
// 1

function isEven(number) {
    const reminder = number % 2;
    if(reminder === 0) {
        console.log('Even');
    } else {
        console.log('Odd')
    }
}
isEven(45);//odd
isEven(2);//even