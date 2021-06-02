///////////// Used to check for browser type ////////////////////////////////
var isFirefox = typeof InstallTrigger !== "undefined";
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = navigator.webkitGetUserMedia;

export { isFirefox, isIE, isEdge, isChrome };
