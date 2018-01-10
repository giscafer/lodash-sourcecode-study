
import add from '../add.js';

let obj = {
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
                return 123;
            case 'string':
                return 'str';
            case 'default':
                return 'default';
            default:
                throw new Error();
        }
    }
};


// 一个Symbol.toPrimitive修改过原始类型值得obj对象
console.log(add(obj, 1)); //124


let s = Symbol.for('s');
let ss = Symbol.for('ss');
// 2个Symbol对象
console.log(add(s, ss)); // NaN


let num1 = '1';
let num2 = '2';
// 2个Symbol对象
console.log(add(num1, num2)); //12

let num3 = 1;
let num4 = 2;
// 2个Symbol对象
console.log(add(num3, num4));  //3
