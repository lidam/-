// 工作信息
const $workInfo = document.getElementById('WorkInfo');
document.addEventListener('getUserInfoEvent', function(evt) {
  $workInfo.innerHTML = evt.detail.workInfo;
});