chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ["foreground.js"]
            })
            .then(() => {
                console.log("js bent");
            })
            .catch(err => console.log(err));
    }
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.insertCSS({
                target: { tabId: tabId },
                files: ["dark.css"]
            })
            .then(() => {
                console.log("css bent");
            })
            .catch(err => console.log(err));
    }
});
