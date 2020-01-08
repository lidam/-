// 学历信息
const $schoolInfo = document.getElementById('SchoolInfo');
document.addEventListener('getUserInfoEvent', function(evt) {
  $schoolInfo.innerHTML = evt.detail.schoolInfo;
});