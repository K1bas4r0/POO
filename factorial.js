function factorial(n){ return n===1 || n === 0 ? 1 : n * (factorial(n-1));}

console.log(factorial(6));