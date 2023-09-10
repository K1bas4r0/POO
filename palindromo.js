let a = 'ana';
let tex = 'fui a roma y encontre mi amor'
let listPalInText = []

function pInText(text) {
    let foText = text.split(' ')
    foText.forEach(word => { palindromo(word) ? listPalInText.push(word) : pass});
}
console.log(pInText(tex));

function palindromo(word){return word === word.split('').reverse().join('')}
console.log(palindromo(a));