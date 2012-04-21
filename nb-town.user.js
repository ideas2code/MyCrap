// ==UserScript==
// @name          nb-town.de
// @namespace     http://www.nb-town.de
// @description   none
// @include       http://nb-town.de/*
// @include       http://www.nb-town.de/*
// ==/UserScript==

//==Optionen==
var FIX_CHAT = 1; //1 = Chat wird fixiert; 0 = keine Änderung
var HIDE_FRIENDS = 1; //1 = versteckt den "Freunde online" Tab. Der wird durch die Chatliste sowieso überflüssig.; 0 = keine Änderung
var HIDE_ADDS = 1; //1 = versteckt Werbeeinblendungen auf der Startseite und den Userpages; 0 = keine Änderungen
//==/Optionen==


var chatStyle = ".m_friendlist_start { position:fixed !important; z-index: 100 !important; }";
var friendsStyle = "#td_friends { display: none !important; }";
var addsStyle = ".inhalt1 { top: 180px !important; } #google_ads_div_468iger_ad_wrapper { display: none !important; } .werbung1 { display: none; } .buttons1 { display: none; }";

if (FIX_CHAT == 1) {
	addStyle(chatStyle)
}
if (HIDE_FRIENDS == 1) { 
	addStyle(friendsStyle)
}
if (HIDE_ADDS == 1) {
	addStyle(addsStyle)
}

function addStyle(newStyle) {
    var styleElement = document.getElementById('styles_js');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = 'styles_js';
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    styleElement.appendChild(document.createTextNode(newStyle));
}
