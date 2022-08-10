
const filter = {
    urls: [
    ]
};
chrome.webRequest.onBeforeRequest.addListener(
    async function (details) {
        if (details.url.indexOf(".m3u8") > 0) { //get only m3u8 request
            update_urlMap('last', details.url) //save to map variable
                        
        }
    }, filter);