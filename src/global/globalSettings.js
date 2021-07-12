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

export function setupGlobal() {
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  window.cpGlobalSetup = {
    isFirefox: typeof InstallTrigger !== "undefined",
    isIE,
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
    prevSlide: null,
  };
}

export function fetchGlobal(prop) {
  if (propList.indexOf(prop) !== -1) {
    return window.cpGlobalSetup[prop];
  }
}

export function setGlobalValue(prop, value) {
  if (typeof prop === "object" && typeof value === "object") {
    prop.forEach(function (propObj, idx) {
      if (propList.indexOf(propObj) !== -1) {
        window.cpGlobalSetup[propObj] = value[idx];
      }
    });

    return;
  }

  if (propList.indexOf(prop) !== -1) {
    window.cpGlobalSetup[prop] = value;
    return;
  }
}

export function setContentMeta() {
  var $metaContentNodeList = document.querySelectorAll("meta");

  $metaContentNodeList[2].setAttribute("content", "IE=11");
}

export function setPrevSlideData() {
  window.cpGlobalSetup.prevSlide = {
    ...cpGlobalSetup.currentSlide,
  };
}
