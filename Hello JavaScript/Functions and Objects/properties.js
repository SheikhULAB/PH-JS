const shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
}
console.log(shoppingCart);
//when you know the specific property name, use dot notation
const penCount = shoppingCart.pen;
console.log(penCount);// 25

//alternate system
const penCount2 = shoppingCart['pen'];
console.log(penCount2);// 25

const properties = Object.keys(shoppingCart);
console.log(properties);
// output:
// [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]

const propertiesVal = Object.values(shoppingCart);
console.log(propertiesVal);
// output:
// [ 3, 1, 5, 1, 25 ]

//set value
const propertyName = 'mouse';
const propertiyVal = shoppingCart[propertyName];
console.log(propertiyVal);//1

shoppingCart.mouse = 15;
console.log(shoppingCart.mouse);//15

shoppingCart['mouse'] = 29;
console.log(shoppingCart.mouse);// 29