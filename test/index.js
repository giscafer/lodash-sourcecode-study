// import isSymbol from './isSymbol.test.js';
// import add from './add.test.js';
// import after from './after.test.js';
// import ary from './ary.test.js'; //源码少./.internal/createWrap.js
// import get from './get.test.js';
// import memoize from './memoize.test.js';
// import words from './words.test.js';
// import stringToArray from './stringToArray.test';


var call = function (key) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }

    return function (context) {
        console.log('222', context);
        return context[key].apply(context, args);
    };
};

const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
    .then(map(x => 2 * x))
    .then(console.log);



class Father {

    constructor() {
        this.hairColor = 'black';
    }

    walker() {
        console.log('walker');
    }
}



class Son extends Father {
    constructor() {
        super();
    }

    printHair(){
        console.log(this.hairColor);
    }
}

let tom = new Son();

console.log(tom.printHair());
console.log(tom.walker())