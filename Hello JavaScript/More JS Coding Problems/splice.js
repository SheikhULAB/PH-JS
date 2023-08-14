const friends = [12,45,32,22,44,62,29,69,87];

const partial = friends.splice(2,5);
console.log(partial);//[ 32, 22, 44, 62, 29 ] change the original array
console.log(friends);//[ 12, 45, 69, 87 ]

//splice removes from array