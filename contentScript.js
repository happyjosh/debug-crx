console.log('It is content script!');

const XDAN_AIR_ID = 'xdan';
// const XDAN_CLOUD_CLASS_NAME = "xdan-cloud-space";

function injectDom(videoDom) {
  //adb和container选择器是必须的
  let airSpace = document.createElement('div');
  // airSpace.className = `abp`;
  airSpace.id = XDAN_AIR_ID;

  // const cloudSpace = document.createElement("div");
  // cloudSpace.className = `${XDAN_CLOUD_CLASS_NAME} container`;
  // airSpace.append(cloudSpace);
  // airSpace.innerHTML = `<div class="">闪光弹</div>`;

  videoDom.parentElement.style.position = 'relative';
  videoDom.parentNode.append(airSpace);

  // let sendContainer = document.createElement('div');

  // initComment(document.getElementsByClassName(XDAN_CLOUD_CLASS_NAME)[0]);

  loadLocalJs(['dist/bundle.js']);
}

function loadLocalJs(files) {
  for (var i = 0; i < files.length; i++) {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL(files[i]);
    document.body.appendChild(s);
  }
}

function runContent() {
  setTimeout(() => {
  }, 1000);
}

runContent();
