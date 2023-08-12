function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    // console.log(sum);
    return sum; //will return 100
    // return; undefined if no value returned
    //ekadhik return dile sudu prothom return kaj korbe ebong return er pore kisui print korbe na
}

// add(45,15);

var total = add(80,20);
console.log('total', total);



function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var singaras = bringSingara(200);
console.log('eating singaras: ', singaras); //eating singaras:  20