function factorial(number) {
    let result = 1;
    for(let i = number; i >=1 ; i--){
        result = result * i;
    }
    return result;
}
const fac = factorial(7);
console.log(fac);//5040

//using while

function factorial2(number) {
    let num = 1;
    let result = 1;
    while(num <=number){
        result = result * num;
        num++;
    }
    return result;
}
const fac2 = factorial2(6);
console.log(fac2);//720