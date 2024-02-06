const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('./sw.js', {
        scope: '/',
      });
    } catch (e) {
      console.log('service worker registration failed');
      console.log(e);
    }
  }
};

registerServiceWorker();

if ('launchQueue' in window) {
  console.log('calling window.launchQueue.setConsumer...');
  window.launchQueue.setConsumer((launchParams) => {
    if (launchParams.targetURL) {
      const targetURL = new URL(launchParams.targetURL);
      console.log('in launchQueue consumer, navigating to target URL...');
      console.log(`launchParams.targetURL: ${launchParams.targetURL}`);
      window.location.href = launchParams.targetURL;
    }
  });
}

window.onload = () => {
  const index3button = document.getElementById('index3button');
  const onButtonClick = () => {
    console.log('in onButtonClick');
    window.open('index3.html', 'namedpopupwindow', 'popup');
  }
  if (index3button) {
    index3button.addEventListener('click', onButtonClick);
  }
}
