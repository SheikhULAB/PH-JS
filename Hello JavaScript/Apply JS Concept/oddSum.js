function getSum(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}
const myNumbers = [12,65,45,78,32,45,91];
const sum = getSum(myNumbers);
console.log(sum);//368

//sum of odd numbers in an array
function sumOfOddNumbers(arr) {
    let sum = 0;
  
    for (let num of arr) {
      if (num % 2 !== 0) {
        sum += num;
      }
    }
  
    return sum;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const oddSum = sumOfOddNumbers(numbers);
  
  console.log("Sum of odd numbers:", oddSum);  // Output: Sum of odd numbers: 25
  