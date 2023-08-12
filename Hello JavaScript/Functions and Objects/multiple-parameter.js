function bringSingara(money){//this value is only availabe in function inside
    console.log('taka disen ', money);
    console.log("ai nen singara");
}
var taka = 300;
bringSingara(taka);


function add(num1, num2) {
    console.log('going to add', num1, num2);
}

add();//undefined undefined

add(5);//going to add 5 undefined

add(125,96);//going to add 125 96

function sum(a, b, c, d, e){
    var sum = a+b+c+d+e;
    console.log(sum);
}

sum(1,2,3,4,5);//15

sum(4,5,6);//NaN


