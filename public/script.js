// (async () => {
// const src = chrome.extension.getURL("index.js");
// const contentScript = await import(src);
// contentScript.main();
// })();
var script = document.createElement('script');
script.type = 'module';
script.src = chrome.extension.getURL("index.js");
(document.body || document.head || document.documentElement).appendChild(script);
script.onload = function() {
    script.remove();
};
// chrome.tabs.executeScript(tabId, {file: './index.js'});