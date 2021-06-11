///////////// Used to check for browser type ////////////////////////////////
// var isFirefox = typeof InstallTrigger !== "undefined";
// var isIE = /*@cc_on!@*/ false || !!document.documentMode;
// var isEdge = !isIE && !!window.StyleMedia;
// var isChrome = navigator.webkitGetUserMedia;

export function setupGlobal() {
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  window.cpGlobalSetup = {
    isFirefox: typeof InstallTrigger !== "undefined",
    isIE: isIE,
    isEdge: !isIE && !!window.StyleMedia,
    isChrome: navigator.webkitGetUserMedia,
    isCcOnEnter_manual: false,
    isCcDisplay_manual: true,
  };
}

export function fetchGlobal(prop) {
  switch (prop) {
    case "isFirefox":
      return window.cpGlobalSetup[prop];
    case "isIE":
      return window.cpGlobalSetup[prop];
    case "isEdge":
      return window.cpGlobalSetup[prop];
    case "isChrome":
      return window.cpGlobalSetup[prop];
    case "isCcOnEnter_manual":
      return window.cpGlobalSetup[prop];
    case "isCcDisplay_manual":
      return window.cpGlobalSetup[prop];
  }
}

export function setGlobalValue(prop, value) {
  switch (prop) {
    case "isFirefox":
      return (window.cpGlobalSetup[prop] = value);
    case "isIE":
      return (window.cpGlobalSetup[prop] = value);
    case "isEdge":
      return (window.cpGlobalSetup[prop] = value);
    case "isChrome":
      return (window.cpGlobalSetup[prop] = value);
    case "isCcOnEnter_manual":
      return (window.cpGlobalSetup[prop] = value);
    case "isCcDisplay_manual":
      return (window.cpGlobalSetup[prop] = value);
  }
}

// export { isFirefox, isIE, isEdge, isChrome };
