chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  if (!details.url) {
    return;
  }
  // 检查是否是wish页面的tab
  if (details.url.indexOf('accounts.pionexusdev.com') > 0) {
    const c = chrome.cookies.remove(
      {
        url: 'https://accounts.pionexusdev.com',
        name: 'sid',
      },
      (res) => {
      }
    );
  }
});
