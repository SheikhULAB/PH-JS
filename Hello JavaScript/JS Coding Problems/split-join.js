const lyrics = 'tumi bondu kala pakhi. ami jeno ki bosonot kale tomai bolte pari nai. kala kala sada sada rong jomese';
console.log(lyrics);

const parts = lyrics.split(' ');
console.log(parts);
// output:
// [
//     'tumi',   'bondu',   'kala',
//     'pakhi',  'ami',     'jeno',
//     'ki',     'bosonot', 'kale',
//     'tomai',  'bolte',   'pari',
//     'nai.',   'kala',    'kala',
//     'sada',   'sada',    'rong',
//     'jomese'
//   ]

const sentence = lyrics.split('.');
console.log(sentence);
// output:
// [
//     'tumi bondu kala pakhi',
//     ' ami jeno ki bosonot kale tomai bolte pari nai',
//     ' kala kala sada sada rong jomese'
//   ]

const chars = lyrics.split('');
console.log(chars);
// output: 
// [
//     't', 'u', 'm', 'i', ' ', 'b', 'o', 'n', 'd', 'u', ' ', 'k',
//     'a', 'l', 'a', ' ', 'p', 'a', 'k', 'h', 'i', '.', ' ', 'a',
//     'm', 'i', ' ', 'j', 'e', 'n', 'o', ' ', 'k', 'i', ' ', 'b',
//     'o', 's', 'o', 'n', 'o', 't', ' ', 'k', 'a', 'l', 'e', ' ',
//     't', 'o', 'm', 'a', 'i', ' ', 'b', 'o', 'l', 't', 'e', ' ',
//     'p', 'a', 'r', 'i', ' ', 'n', 'a', 'i', '.', ' ', 'k', 'a',
//     'l', 'a', ' ', 'k', 'a', 'l', 'a', ' ', 's', 'a', 'd', 'a',
//     ' ', 's', 'a', 'd', 'a', ' ', 'r', 'o', 'n', 'g', ' ', 'j',
//     'o', 'm', 'e', 's',
//     ... 1 more item
//   ]

// .....slice.....
const partial = lyrics.slice(5,8);
console.log(partial);//bon

const partial2 = lyrics.substring(5,8);
console.log(partial2);//bon


const lines = [
        'tumi bondu kala pakhi',
        ' ami jeno ki bosonot kale tomai bolte pari nai',
        ' kala kala sada sada rong jomese'
      ];
const newSong = lines.join(':');
console.log(newSong);      
// output: 
// tumi bondu kala pakhi: ami jeno ki bosonot kale tomai bolte pari nai: kala kala sada sada rong jomese