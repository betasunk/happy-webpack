import message from './message.js';
// 将message的内容显示到页面中
let p = document.createElement('p');
console.log('message>>>>>',message);
p.innerHTML = message;
document.body.appendChild(p);
