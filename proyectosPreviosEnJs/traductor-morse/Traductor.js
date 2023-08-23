const prompt = require("prompt-sync")({ sigint: true });

const enmap = {
        a: '.-',      b: '-...',    c: '-.-.',    d: '-..',
        e: '.',       f: '..-.',    g: '--.',     h: '....',
        i: '..',      j: '.---',    k: '-.-',     l: '.-..',
        m: '--',      n: '-.',      o: '---',     p: '.--.',
        q: '--.-',    r: '.-.',     s: '...',     t: '-',
        u: '..-',     v: '...-',    w: '.--',     x: '-..-',
        y: '-.--',    z: '--..',    1: '.----',   2: '..---',
        3: '...--',   4: '....-',   5: '.....',   6: '-....',
        7: '--...',   8: '---..',   9: '----.',   0: '-----',

        '.': '.-.-.-',    ',': '--..--',    '?': '..--..',
        "'": '.----.',    '/': '-..-.',     '(': '-.--.',
        ')': '-.--.-',    '&': '.-...',     ':': '---...',
        ';': '-.-.-.',    '=': '-...-',     '+': '.-.-.',
        '-': '-....-',    '_': '..--.-',    '"': '.-..-.',
        '$': '...-..-',   '!': '-.-.--',    '@': '.--.-.',
        ' ': '/',
}

const demap = {
        '.-': 'a',      '-...': 'b',    '-.-.': 'c',    '-..': 'd',
        '.': 'e',       '..-.': 'f',    '--.': 'g',     '....': 'h',
        '..': 'i',      '.---': 'j',    '-.-': 'k',     '.-..': 'l',
        '--': 'm',      '-.': 'n',      '---': 'o',     '.--.': 'p',
        '--.-': 'q',    '.-.': 'r',     '...': 's',     '-': 't',
        '..-': 'u',     '...-': 'v',    '.--': 'w',     '-..-': 'x',
        '-.--': 'y',    '--..': 'z',    '.----': '1',   '..---': '2',
        '...--': '3',   '....-': '4',   '.....': '5',   '-....': '6',
        '--...': '7',   '---..': '8',   '----.': '9',   '-----': '0',

        '.-.-.-': '.',    '--..--': ',',    '..--..': '?',
        '.----.': "'",    '-..-.': '/',     '-.--.': '(',
        '-.--.-': ')',    '.-...': '&',     '---...': ':',
        '-.-.-.': ';',    '-...-': '=',     '.-.-.': '+',
        '-....-': '-',    '..--.-': '_',    '.-..-.': '"',
        '...-..-': '$',   '-.-.--': '!',    '.--.-.': '@',
        '/': ' ',
}       

/*function encoder(menssage){
    let codeMessage = [];
    const menssageParse = menssage.split(' ');

    menssageParse.forEach((word) => {for (let char of word) {codeMessage.push(enmap[char])} codeMessage.push('/') });
    return codeMessage.join('  ');
}
//Function worst optimized
*/

function encoder(menssage){
        let codeMessage = []; 
        for (let char of menssage) {codeMessage.push(enmap[char])}
        return codeMessage.join('  ');
}

function decoder(menssage){
        parseMenssage = menssage.split(' ');
        let decodeMessage = [];
        for (let letter of parseMenssage) {decodeMessage.push(demap[letter])}
        return decodeMessage.join('')
}

const cond = prompt('Escribe "1" para traducir de texto a morse y "2" para morse a texto (1/2): ')
cond === '1'? console.log(encoder(prompt('dame un mensaje en letras: '))): 
console.log(decoder(prompt('dame un mensaje en morse, por favor separa cad letra con un " "y cada palabra con "/": ')));

/*code = {
        a: '.-',      b: '-...',    c: '-.-.',    d: '-..',
        e: '.',       f: '..-.',    g: '--.',     h: '....',
        i: '..',      j: '.---',    k: '-.-',     l: '.-..',
        m: '--',      n: '-.',      o: '---',     p: '.--.',
        q: '--.-',    r: '.-.',     s: '...',     t: '-',
        u: '..-',     v: '...-',    w: '.--',     x: '-..-',
        y: '-.--',    z: '--..',    1: '.----',   2: '..---',
        3: '...--',   4: '....-',   5: '.....',   6: '-....',
        7: '--...',   8: '---..',   9: '----.',   0: '-----',

        '.': '.-.-.-',    ',': '--..--',    '?': '..--..',
        "'": '.----.',    '/': '-..-.',     '(': '-.--.',
        ')': '-.--.-',    '&': '.-...',     ':': '---...',
        ';': '-.-.-.',    '=': '-...-',     '+': '.-.-.',
        '-': '-....-',    '_': '..--.-',    '"': '.-..-.',
        '$': '...-..-',   '!': '-.-.--',    '@': '.--.-.',
        ' ': '/',
}
    
    


console.log(code.a); 
*/