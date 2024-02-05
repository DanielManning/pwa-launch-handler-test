// If-condition prevents infinitely opening a new window,
// and only calls window.open if not in a PWA app window.
if (!window.doNotReopen && !window.matchMedia('(display-mode: standalone)').matches) {
  // Workaround for opening links in PWA window:
  // window.open() from Chrome context focuses the existing PWA window,
  // and the launchQueue consumer handles the opening of the link.
  const newWindow = window.open(window.location.href);
  newWindow.doNotReopen = true;
  window.close();
}
