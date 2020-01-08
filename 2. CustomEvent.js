// 1.创建事件
var userEvent = new CustomEvent('userEvent', {
  "detail": { // 可携带额外的数据
    name: 'Lee',
    age: 18
  },
  "bubbles": true,
  "cancelable": false
});
// 2.注册事件监听器
document.addEventListener('userEvent', function(e) {
  // to do
  console.log('to do something');
});
// 3.触发事件
document.dispatchEvent(userEvent);