// 个人信息
const $personalInfo = document.getElementById('PersonalInfo');
document.addEventListener('getUserInfoEvent', function(evt) {
  $personalInfo.innerHTML = evt.detail.personalInfo;
});