// ==UserScript==
// @name         Notaquest Token Grabber
// @namespace    https://notaquest.owendeed.com
// @version      1.0
// @description  One-click Meta token grabber for Notaquest
// @match        https://secure.oculus.com/*
// @match        https://notaquest.owendeed.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-idle
// ==/UserScript==

if (GM_getValue("used")) return;
if (location.hostname === "notaquest.owendeed.com") {
    if (!location.search.includes("token=")) {
        window.location.href = "https://secure.oculus.com/";
    }
    return;
}

if (location.hostname === "secure.oculus.com") {
    var html = document.documentElement.innerHTML;
    var match = html.match(/"accessToken":"(OC[A-Za-z0-9+\/=]+)"/);
    if (match) {
        GM_setValue("used", true);
        window.location.href = "https://notaquest.owendeed.com/?token=" + match[1];
    }
}