'use strict';

let num = 33721,
    product = 0;

num.toString().split('').reduce(function(a, b) {
    product = +a * +b;
    return product;
});

let result = product**3;
let symbols = result.toString();

alert(symbols.slice(0,2));