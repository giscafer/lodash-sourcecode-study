var call = function (key) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    
    return function (context) { console.log('222',context);return context[key].apply(context, args); };
};

const map = call.bind(null, 'map');
map(x => 2 * x)