import after from '../after.js';

var saves = ['profile', 'settings'];

var done = after(saves.length, function () {
    console.log('done saving!');
});

saves.forEach(function (item) {
    console.log(item);
    done();
});
// => 函数执行>=2次后打印 'done saving!' 