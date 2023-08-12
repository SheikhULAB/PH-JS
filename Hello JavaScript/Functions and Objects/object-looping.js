const shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,
    bottle: 1,
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

//hard version
for(var i = 0; i < keys.length; i++) {
    // console.log(keys[i]);
    var propertyName = keys[i];
    var propertyVal = shoppingCart[propertyName];
    console.log(propertyName, propertyVal);
}
// output:
// books 3
// sunglass 1
// keyboard 5
// mouse 1
// pen 25
// shoes 2
// bottle 1


//easy version
//for in loop
for(var propertyName in shoppingCart) {
    // console.log(propertyName);
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}
// output: 
// books 3
// sunglass 1
// keyboard 5
// mouse 1
// pen 25
// shoes 2
// bottle 1