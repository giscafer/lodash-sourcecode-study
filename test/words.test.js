
import words from '../words';

let string = 'fred sssssss asssss';
let string1 ='fred, barney, & pebbles';

console.log(words(string, /[^ ]+/g))
console.log(words(string1))
console.log(words(string1, /[^, ]+/g))