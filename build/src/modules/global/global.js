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
    case "isCcOnEnter_auto":
      return window.cpGlobalSetup[prop];
    case "slides":
      return window.cpGlobalSetup[prop];
    case "currentSlide":
      return window.cpGlobalSetup[prop];
    case "lastFrame":
      return window.cpGlobalSetup[prop];
    case "firstFrame":
      return window.cpGlobalSetup[prop];
    case "slideAudioName":
      return window.cpGlobalSetup[prop];
    default:
      console.log("In correct property");
  }
}

export function setGlobalValue(prop, value) {
  if (typeof prop === "object" && typeof value === "object") {
    prop.forEach(function (propObj, idx) {
      window.cpGlobalSetup[propObj] = value[idx];
    });

    return;
  }

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
    case "isCcOnEnter_auto":
      return (window.cpGlobalSetup[prop] = value);
    case "slides":
      return (window.cpGlobalSetup[prop] = value);
    case "currentSlide":
      return (window.cpGlobalSetup[prop] = value);
    case "lastFrame":
      return (window.cpGlobalSetup[prop] = value);
    case "firstFrame":
      return (window.cpGlobalSetup[prop] = value);
    case "slideAudioName":
      return (window.cpGlobalSetup[prop] = value);
    default:
      console.log("In correct property");
  }
}
