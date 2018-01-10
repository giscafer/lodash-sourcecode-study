// import a from './isSymbol.test.js';
// import a from './add.test.js';
import after from './after.test.js';
// import ary from './ary.test.js'; //源码少./.internal/createWrap.js
import assignWith from '../assignWith.js';

function customizer(objValue, srcValue) {
  return isUndefined(objValue) ? srcValue : objValue
}

const defaults = partialRight(assignWith, customizer)

defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 })
 // => { 'a': 1, 'b': 2 }


