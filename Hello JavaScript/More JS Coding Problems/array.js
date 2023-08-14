const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {
    id: 121,
    class: 11,
    name: "Agun",
}
const friends = [13,14,21,15,20];
function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);//string
console.log(typeof age);//number
console.log(typeof isIndependent);//boolean
console.log(typeof student);//object

console.log(typeof friends);//object
console.log(Array.isArray(friends));//true
console.log(Array.isArray(age));//false

console.log(typeof add);//function

console.log(friends.includes(19));//false
console.log(friends.includes(21));//true


if(friends.indexOf(19 !== -1)){
    
}

const newFriends = [12,13,11,10];
const allFriends = newFriends.concat(friends);
console.log(allFriends);
//output:
// [
//     12, 13, 11, 10, 13,
//     14, 21, 15, 20
//   ]

