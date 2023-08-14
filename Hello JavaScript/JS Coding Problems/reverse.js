function reverseString(text) {
    let reversed = '';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
    }
    return reversed;
}

const myString = 'i am a good boy';
const reversed = reverseString(myString);
console.log(reversed);//yob doog a ma i


// words reversed:
function reverseWord(str) {
    const words = str.split(' ');
    const result = [];
    for(let i = words.length-1; i >=0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
   return reversed;
}
const myString2 = 'i am a good boy';
const reversedWords = reverseWord(myString2);
console.log(reversedWords);//boy good a am i