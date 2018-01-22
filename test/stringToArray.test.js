

import stringToArray from '../.internal/stringToArray.js';

let stringUnicode = '\ud800-\udfff';

let stringAscii = 'sdfsdff1123e,';

console.log('stringUnicode:', stringToArray(stringUnicode))
console.log('stringAscii:', stringToArray(stringAscii))