const queryUrlString = () => {
    let  url = window.location.href
    let obj = {};
    url.replace(/([^?=&#]+)=([^?=&#]+)/g, (big, $1, $2) => obj[$1] = $2)
    url.replace(/#([^?=&#]+)/g, (big, $1) => obj['hash'] = $1)
    return obj
 }