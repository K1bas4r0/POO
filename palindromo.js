let a = 'naan';
let tex = 'le dije a ana que ellos narran varias sagas'
let palInTexMax = 'esto le dije a mi loca colima'

inv = palInTexMax.replace(/\s/g,'').split('');
swap = palInTexMax.replace(/\s/g,'').split('');

inv = inv.reverse();

jswap = swap.join('');
jinv = inv.join('');

while (!palin) {
    if (jswap === jinv) {
        
    }
    swap = swap.join('');
    inv = inv.join('');
}

console.log(jswap);
console.log(ijnv)

let listPalInText = []

function pInText(text) {
    let foText = text.split(' ')
    foText.forEach(word => { palindromo(word) ? listPalInText.push(word) : 0});
    return listPalInText
}
console.log(pInText(tex));

function palindromo(word){return word === word.split('').reverse().join('')}
console.log(palindromo(a));