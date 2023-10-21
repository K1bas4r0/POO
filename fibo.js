function fibo (n){return n===1 || n===0 ? n : fibo(n-1) + fibo(n-2)}

console.log(fibo(6));

function padovan (n){return n <=3 ? 1 : padovan(n-2) + padovan(n-3)}

console.log(padovan(8));