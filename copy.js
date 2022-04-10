let url, split
chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    url = tabs[0].url
    if (url.includes('&')){
        split = url.slice(0, url.indexOf('&'))
    }
});



function copy() {
    const framework = document.getElementById('framework')
    if (url.includes('youtube.com')) {
        framework.value = `;;play ${split}`
        framework.select()
        navigator.clipboard.writeText(framework.value)
    } else {
        framework.value = '-not a valid website'
    }
}

document.getElementById("grabber").addEventListener("click", copy);