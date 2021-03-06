/**
 * Created by YB on 2016-10-28.
 */
function getCookie() {
    return document.cookie;
}
function logCookie() {
    console.log(getCookie());
}
function parseArray (arr, seperator) {
    return arr
}
function stringToObj (obj, string, seperator) {
    var key = string.slice(0, string.indexOf(seperator)),
        val = string.slice(string.indexOf(seperator)+1);
    obj[key] = val;
}
function parseCookieObj () {
    var cookieArr = document.cookie.split(';').map((cookieStr)=>cookieStr.trim());
    var cookieObj = {};
    for(var cookie of cookieArr) {
        stringToObj(cookieObj, cookie, '=');
    }
    return cookieObj;
}
function getCookieKeys () {
    return Object.keys(parseCookieObj());
}
function getCookieValues () {
    return Object.values(parseCookieObj());
}
function getCookieValue (key) {
    return (parseCookieObj())[key];
}
function setCookie(key, value) {
    document.cookie = key + '=' + value;
}
