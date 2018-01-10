// 拷贝代码到 https://lodash.com/docs/4.17.4#before 页面执行，点击banner看效果
document.querySelector(".header-section").addEventListener('click', _.before(5, function(e){console.log(e)}));
// console.log 只会执行四次，之后点击事件无效