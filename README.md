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

## Test Scenarios for https://issues.chromium.org/issues/40255471#comment68

Scenario 1: chrome://flags/#enable-user-link-capturing-pwa is set to "Default" (experiment disabled),
Default web browser set to Chrome.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Copy/paste http://localhost:8080/index2.html into a separate OS application (e.g. Notes.app)
and click on the link.

:x: Issue: Chrome opens index2.html in a new tab instead of the existing opened PWA window.

---

Scenario 2: chrome://flags/#enable-user-link-capturing-pwa is set to "Enabled",
Default web browser set to Chrome.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Copy/paste http://localhost:8080/index2.html into a separate OS application (e.g. Notes.app)
and click on the link.

:warning: Workaround: Chrome opens index2.html in a Chrome tab first,
then the window.open workaround in index2.js opens
the existing opened PWA window and focuses it.

---

Scenario 3: chrome://flags/#enable-user-link-capturing-pwa is set to "Enabled",
Default web browser set to Chrome.
1. Remove `<script type="text/javascript" src="index2.js"></script>`
from index2.html
2. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
3. Copy/paste http://localhost:8080/index2.html into a separate OS application (e.g. Notes.app)
and click on the link.

:x: Issue: Chrome opens index2.html in a Chrome tab, not the existing opened PWA window.

---

Scenario 4: chrome://flags/#enable-user-link-capturing-pwa is set to "Default" (experiment disabled),
Default web browser set to Firefox.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Copy/paste http://localhost:8080/index2.html into a separate OS application (e.g. Notes.app)
and click on the link.

:x: Issue: The OS opens index2.html in a new Firefox tab instead of the existing opened PWA window.

---

Scenario 5: chrome://flags/#enable-user-link-capturing-pwa is set to "Enabled",
Default web browser set to Firefox.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Copy/paste http://localhost:8080/index2.html into a separate OS application (e.g. Notes.app)
and click on the link.

:x: Issue: The OS opens index2.html in a new Firefox tab instead of the existing opened PWA window.
Same result as Scenario 4.

## Test Scenarios for https://issues.chromium.org/issues/324108010 `window.open('index3.html', 'namedpopupwindow', 'popup');`

Scenario 1: chrome://flags/#enable-user-link-capturing-pwa is set to "Default" (experiment disabled).
Default web browser set to Chrome.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Click the button to call `window.open('index3.html', 'namedpopupwindow', 'popup');`.

:white_check_mark: Correct behavior: index3.html opens in a new PWA window with message "window.name: namedpopupwindow, has window.opener: true".

---

Scenario 2: chrome://flags/#enable-user-link-capturing-pwa is set to "Enabled".
Default web browser set to Chrome.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Click the button to call `window.open('index3.html', 'namedpopupwindow', 'popup');`.

:white_check_mark: Correct behavior: index3.html opens in a new PWA window with message "window.name: namedpopupwindow, has window.opener: true".

---

Scenario 3: chrome://flags/#enable-user-link-capturing-pwa is set to "Enabled".
Default web browser set to Chrome.
1. Open http://localhost:8080/, but don't install the app.
2. Click the button to call `window.open('index3.html', 'namedpopupwindow', 'popup');`.

:white_check_mark: Correct behavior: index3.html opens in a popup window with message "window.name: namedpopupwindow, has window.opener: true".

---

Scenario 4a: chrome://flags/#enable-user-link-capturing-pwa is set to "Default" (experiment disabled).
Default web browser set to Chrome.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Open the 3-dots menu in the upper-right corner and click "Open in Chrome".
3. Click the button to call `window.open('index3.html', 'namedpopupwindow', 'popup');`.

:white_check_mark: Correct behavior: index3.html opens in a new PWA window with message "window.name: namedpopupwindow, has window.opener: true".

---

Scenario 4b: chrome://flags/#enable-user-link-capturing-pwa is set to "Enabled".
Default web browser set to Chrome.
1. Install and open "PWA Launch Handler Test" PWA window at http://localhost:8080/.
2. Open the 3-dots menu in the upper-right corner and click "Open in Chrome".
3. Click the button to call `window.open('index3.html', 'namedpopupwindow', 'popup');`.

:x: index3.html opens in a new PWA window with message "window.name: , has window.opener: false".

Expected behavior: index3.html should open in a popup window with message "window.name: namedpopupwindow, has window.opener: true" (scenario 3).
