'use strict'

const number = process.argv[2] || 0;

console.log(number)

let sum = 0;


function factorial(n) {
    let result = 1;
    
    if (n < 0) {
        return "Error";
    }

    for (let i = n; i > 1; i--) {
        result *= i;        
    }

    return result
    
}

// for (let i = 0; i <= number; i++){
//     sum += i;
// }
// console.log(sum)

const assert = require('assert');

assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');

// console.log(factorial(number));