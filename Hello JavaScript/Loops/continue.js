
var numbers = [45, 87, 89, 56, 32, 51, 25];

for(i = 0; i < numbers.length; i++) {
    if(numbers[i] > 50) {
        continue;
    }
    console.log(numbers[i]);
}
// output: 
// 45
// 32
// 25