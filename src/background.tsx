import { isDebugUS } from './common/utils';

chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  if (!details.url) {
    return;
  }
  if (details.url.indexOf('accounts.pionexusdev.com') > 0) {
    isDebugUS().then((res) => {
      if (!res) {
        return;
      }

      chrome.cookies.remove(
        {
          url: 'https://accounts.pionexusdev.com',
          name: 'sid',
        },
        (res) => {}
      );
    });
  }
});
