//write your code here
const animals = ['cheetah', 'dog', 'cat', 'dodobird', 'bear', 'dolphin'];
function shortWords(array){
    return array.filter(word => word.length < 5);
}
console.log(shortWords(animals));

function noVowel(array){
    // return array.join(' ').replace(/[aeiou]/gi, 'x').split(' ');
    return array.map(word => word.replace(/[aeiou]/gi, 'x'));
}
console.log(noVowel(animals));

function longToShort(array){
    return array.sort((a, b) => b.length - a.length);
}
console.log(longToShort(animals));

function onlyVowelA(array){
    return array.filter(word => word.includes('a'));
}
console.log(onlyVowelA(animals));

function pluralize(array){
    return array.map(word => `${word}s`);
}
console.log(pluralize(animals));

function longeraThanSeven(array){
    return array.some(word => word.length > 7);   
}
console.log(longeraThanSeven(animals));

function oddLength(array){
    return array.filter(word => word.length % 2 !== 0);
}
console.log(oddLength(animals));

function allFour(array){
    return array.every(word => word.length === 4);
}
console.log(allFour(animals));

// function sum(array){
//     return array.reduce((a, b) => a + b);
// }
// console.log(sum(animals));