export function setupGlobal() {
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  window.cpGlobalSetup = {
    isFirefox: typeof InstallTrigger !== "undefined",
    isIE: isIE,
    isEdge: !isIE && !!window.StyleMedia,
    isChrome: navigator.webkitGetUserMedia,
    isCcOnEnter_manual: false,
    isCcDisplay_manual: true,
    isCcOnEnter_auto: false,
    slides: null,
    currentSlide: null,
    lastFrame: null,
    firstFrame: null,
    slideAudioName: null,
    slideLabel: "",
  };
}

export function fetchGlobal(prop) {
  var propList = [
    "isFirefox",
    "isIE",
    "isEdge",
    "isChrome",
    "isCcOnEnter_manual",
    "isCcDisplay_manual",
    "isCcOnEnter_auto",
    "slides",
    "currentSlide",
    "lastFrame",
    "firstFrame",
    "slideAudioName",
    "slideLabel",
  ];

  for (var i = 0; i < propList.length; i++) {
    if (prop === propList[i]) {
      return window.cpGlobalSetup[prop];
    }
  }
}

export function setGlobalValue(prop, value) {
  if (typeof prop === "object" && typeof value === "object") {
    prop.forEach(function (propObj, idx) {
      window.cpGlobalSetup[propObj] = value[idx];
    });

    return;
  }

  var propList = [
    "isFirefox",
    "isEdge",
    "isChrome",
    "isCcOnEnter_manual",
    "isCcDisplay_manual",
    "isCcOnEnter_auto",
    "slides",
    "currentSlide",
    "lastFrame",
    "firstFrame",
    "slideAudioName",
    "slideLabel",
  ];

  for (var i = 0; i < propList.length; i++) {
    if (prop === propList[i]) {
      return (window.cpGlobalSetup[prop] = value);
    }
  }
}
