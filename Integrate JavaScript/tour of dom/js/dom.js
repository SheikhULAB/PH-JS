console.log("hello from js");
console.log(document);
console.log(document.body);

const h1Collection = document.getElementsByTagName('h1');
const liCollection = document.getElementsByTagName('li');
console.log(h1Collection);
console.log(liCollection);

for(const li of liCollection){
    console.log(li);
    console.log(li.innerText);
}

console.log(document.getElementById('dom-title'));
console.log(document.getElementById('jalali'));

console.log(document.getElementsByClassName('important'));