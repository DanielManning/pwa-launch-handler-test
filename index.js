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
