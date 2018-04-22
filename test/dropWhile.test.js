import dropWhile from '../dropWhile';
import dropRightWhile from '../dropRightWhile';

const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'pebbles', 'active': false },
    { 'user': 'fred',    'active': true },
    { 'user': 'test', 'active': false },
    { 'user': 'test2',    'active': true },
 ];

 let res=dropWhile(users, ({ active }) => active);
//  let res2=dropRightWhile(users, ({ active }) => active);

 console.log(JSON.stringify(res));
//  console.log(JSON.stringify(res2));
 // 结果不对
 //[{"user":"pebbles","active":false},{"user":"test","active":false},{"user":"test2","active":true}]