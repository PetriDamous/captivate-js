const propList = [
  "isFirefox",
  "isIE",
  "isEdge",
  "isChrome",
  "isCcOnEnter_manual",
  "isCcDisplay_manual",
  "isCcOnEnter_auto",
  "slides",
  "slidesArray",
  "currentSlide",
  "prevSlide",
];

export function setupGlobal() {
  const isIE = /*@cc_on!@*/ false || !!document.documentMode;

  window.cpGlobalSetup = {
    isFirefox: typeof InstallTrigger !== "undefined",
    isIE,
    isEdge: !isIE && !!window.StyleMedia,
    isChrome: navigator.webkitGetUserMedia,
    isCcOnEnter_manual: false,
    isCcDisplay_manual: true,
    isCcOnEnter_auto: false,
    slides: null,
    slidesArray: null,
    currentSlide: null,
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
    prop.forEach((propObj, idx) => {
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
  const $metaContentNodeList = document.querySelectorAll("meta");

  for (let i = 0; i < $metaContentNodeList.length; i++) {
    if ($metaContentNodeList[i].getAttribute("content") === "IE=10") {
      $metaContentNodeList[i].setAttribute("content", "IE=11");
      return;
    }
  }
}

export function setSlideData() {
  const slidesArray = cp.model.data.project_main.slides.split(",");

  const slides = slidesArray.map((slideId) => {
    return cp.model.data[slideId];
  });

  const propToSetArray = ["slides", "slidesArray"];

  const valueToSetArray = [slides, slidesArray];

  setGlobalValue(propToSetArray, valueToSetArray);
}

export function setPrevSlideData() {
  window.cpGlobalSetup.prevSlide = {
    ...cpGlobalSetup.currentSlide,
  };
}
