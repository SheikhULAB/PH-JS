//1 * 2 * 3 * 4...
//3! = 3*2*1
//4! = 4*3*2*1
function multiplicationOfNumbers(number) {
    let result = 1;
    for(let i = 1; i <=number; i++){
        result = result * i;
    }
    return result;
}
const result = multiplicationOfNumbers(7);
console.log(result);//5040