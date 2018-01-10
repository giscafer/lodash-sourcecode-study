import isSymbol from '../isSymbol.js';

let s = Symbol('s');
let value = {
    [s]: 'svalue'
}
console.log(isSymbol(value));
console.log(isSymbol(s));