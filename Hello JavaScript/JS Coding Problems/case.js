const userName = 'blackPink';
const userInput = 'blackPinK';

if(userInput === userName){
    console.log("valid user");
} else {
    console.log("invalid user");//invalid user print out
}


if(userInput.toLowerCase() === userName.toLowerCase()){
    console.log("valid user");//valid user print out
} else {
    console.log("invalid user");
}

console.log(userInput.toLowerCase());//blackpink
console.log(userInput.toUpperCase());//BLACKPINK