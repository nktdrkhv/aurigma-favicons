function loadIcon() {
  let iconUrl;

  switch (document.URL) {
    case document.URL.match('https://customerscanvas.com/help/*'):
      iconUrl = chrome.runtime.getURL('assets/favicon-green.ico')
      break;
    case document.URL.match('https://customerscanvas.com/dev/*'):
      iconUrl = chrome.runtime.getURL('assets/favicon-purple.ico')
      break;
    case document.URL.match('https://api.customerscanvashub.com/*'):
      iconUrl = chrome.runtime.getURL('assets/favicon-yellow.ico')
      break;
    case document.URL.match('https://customerscanvashub.com/*'):
      iconUrl = chrome.runtime.getURL('assets/favicon-orange.ico')
      break;
    case document.URL.match('https://eu.customerscanvashub.com/*'):
      iconUrl = chrome.runtime.getURL('assets/favicon-red.ico')
      break;
    default:
      break;
  }

  setIcon(iconUrl);
}

function setIcon(icon) {
  let link = document.querySelector("link[rel~=icon]")
  if (link && icon) {
    link.removeAttribute('type')
    link.href = icon
  }
}

// Hashchange doesn't always fire when changing blades
document.addEventListener('load', loadIcon, true);

// Some blades don't fire onload eg bulk operation results
// TODO is 500ms enough?
document.addEventListener('click', () => setTimeout(loadIcon, 500), true);
