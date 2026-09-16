// ==UserScript==
// @name         Notaquest Token Grabber
// @namespace    https://notaquest.owendeed.com
// @version      1.0
// @description  One-click Meta token grabber for Notaquest
// @match        https://secure.oculus.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

if (location.hash !== "#notaquest") return;

var html = document.documentElement.innerHTML;
var match = html.match(/"accessToken":"(OC[A-Za-z0-9+\/=]+)"/);
if (match) {
    window.location.href = "https://notaquest.owendeed.com/?token=" + match[1];
}