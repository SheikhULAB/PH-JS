var numbers = [78, 45, 98, 45];
console.log(numbers);//[ 78, 45, 98, 45 ]
console.log(numbers.length);//4

numbers.push(63);
console.log(numbers);//[ 78, 45, 98, 45, 63 ]
console.log(numbers.length);//5

numbers.pop();
console.log(numbers);//[ 78, 45, 98, 45 ]

var element = numbers.pop();
console.log(element);//5

var friends = ["balam", "kalam", "salam"];
friends.push("gelam");
console.log(friends);//[ 'balam', 'kalam', 'salam', 'gelam' ]

friends.push("Alam");
console.log(friends);//[ 'balam', 'kalam', 'salam', 'gelam', 'Alam' ]

friends.pop();
friends.pop();
friends.pop();
console.log(friends);//[ 'balam', 'kalam' ]
console.log(friends.length);//2

var element1 = friends.pop();
console.log(element1);//kalam

