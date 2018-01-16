

import memoize from '../memoize.js';
import _values from '../values.js';

let object = { 'a': 1, 'b': 2 };
let other = { 'c': 3, 'd': 4 };

let values = memoize(_values);

console.log(values(object))
// => [1, 2]
 
console.log(values(other))
// => [3, 4]
 
object.a = 2;
console.log(object.a);
// => 2
console.log(values(object));
// => [1, 2]
 
// Modify the result cache.
// values.cache.set(object, ['a', 'b']);
values.cache.delete(object);
console.log(values(object));
// => ['a', 'b']
 
// Replace `_.memoize.Cache`.
// _.memoize.Cache = WeakMap;