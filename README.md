# pwa-launch-handler-test

Testing launch_handler / Chrome Link Capturing experimental flag.
chrome://flags/#enable-user-link-capturing-pwa

Uses example code from MDN's "Using Service Workers" page.
https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

Usage:
```
npm i
node .
```

My test environment:
OS: macOS Sonoma 14.1
Chrome: Version 121.0.6167.139 (Official Build) (arm64)

Test Scenarios:

Scenario 1: chrome://flags/#enable-user-link-capturing-pwa is set to "Default",
Default web browser set to Chrome.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Copy/paste http://localhost:8080/index2.html into a separate OS application (e.g. Notes.app)
and click on the link.

Issue: Chrome opens index2.html in a new tab instead of the existing opened PWA window.

Scenario 2: chrome://flags/#enable-user-link-capturing-pwa is set to "Enabled",
Default web browser set to Chrome.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Copy/paste http://localhost:8080/index2.html into a separate OS application (e.g. Notes.app)
and click on the link.

Workaround: Chrome opens index2.html in a Chrome tab first,
then the window.open workaround in index2.js opens
the existing opened PWA window and focuses it.

Scenario 3: chrome://flags/#enable-user-link-capturing-pwa is set to "Enabled",
Default web browser set to Chrome.
1. Remove `<script type="text/javascript" src="index2.js"></script>`
from index2.html
2. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
3. Copy/paste http://localhost:8080/index2.html into a separate OS application (e.g. Notes.app)
and click on the link.

Issue: Chrome opens index2.html in a Chrome tab, not the existing opened PWA window.

Scenario 4: chrome://flags/#enable-user-link-capturing-pwa is set to "Default",
Default web browser set to Firefox.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Copy/paste http://localhost:8080/index2.html into a separate OS application (e.g. Notes.app)
and click on the link.

Issue: The OS opens index2.html in a new Firefox tab instead of the existing opened PWA window.

Scenario 5: chrome://flags/#enable-user-link-capturing-pwa is set to "Enabled",
Default web browser set to Firefox.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Copy/paste http://localhost:8080/index2.html into a separate OS application (e.g. Notes.app)
and click on the link.

Issue: The OS opens index2.html in a new Firefox tab instead of the existing opened PWA window.
Same result as Scenario 4.
