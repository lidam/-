// 1.创建事件
var userEvent = document.createEvent('Event');
userEvent.initEvent('userEvent', false, false);
// 2.注册事件监听器
document.addEventListener('userEvent', function(e) {
  // to do
  console.log('to do something');
});
// 3.触发事件
document.dispatchEvent(userEvent);