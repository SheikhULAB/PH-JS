const lyrics = 'tumi bondu kala pakhi ami jeno ki bosonot kale tomai bolte pari nai. kala kala sada sada rong jomese';

// const doesExist = lyrics.includes('pakhi');
// console.log(doesExist);//true

// const searchString = 'Pakhi';
// const isExist = lyrics.includes(searchString);//case sensetive
// console.log(isExist);//false

const searchString = 'Pakhi';
const searchStringLower = searchString.toLowerCase();
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
console.log(doesExist);//true


const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine);//true


// .............indexOf.....

console.log(lyrics.indexOf('kala'));//11
console.log(lyrics.indexOf('kaila'));//-1

if(lyrics.indexOf('sada') !==-1) {
    console.log("exists inside the strings");//exists inside the strings
} else {
    console.log("cant find it");
}

// ....startsWith....

console.log(lyrics.startsWith('tumi'));//true

//....endsWith....

const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

console.log(fileName.endsWith('.pdf'));//true
console.log(otherFile.endsWith('.png'));//true