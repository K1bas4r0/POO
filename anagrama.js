let a = 'new york times'
let b = 'monkeys write '
function anagrama(word1, word2) {return word1.length === word2.length && word1.split('').sort().join('') === word2.split('').sort().join('');}

console.log(anagrama(a, b));