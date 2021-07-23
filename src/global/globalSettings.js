const propList = [
  "isFirefox",
  "isIE",
  "isEdge",
  "isChrome",
  "isCcOnEnter_manual",
  "isCcDisplay_manual",
  "isCcOnEnter_auto",
  "slidesObjArray",
  "slidesIdArray",
  "currentSlide",
  "prevSlide",
  "firstSlide",
  "lastSlide",
  "isToggleMuteUnmute",
  "isTogglePausePlay",
  "nextSlide",
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
    slidesObjArray: null,
    currentSlide: null,
    prevSlide: null,
    isToggleMuteUnmute: true,
    isTogglePausePlay: true,
    nextSlide: null,
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
  const slidesIdArray = cp.model.data.project_main.slides.split(",");

  const slidesObjArray = slidesIdArray.map((slideId) => {
    return cp.model.data[slideId];
  });

  const firstSlide = slidesObjArray[0];

  const lastSlide = slidesObjArray[slidesObjArray.length - 1];

  const propToSetArray = [
    "slidesIdArray",
    "slidesObjArray",
    "firstSlide",
    "lastSlide",
  ];

  const valueToSetArray = [
    slidesIdArray,
    slidesObjArray,
    firstSlide,
    lastSlide,
  ];

  setGlobalValue(propToSetArray, valueToSetArray);
}

export function setPrevSlideData() {
  window.cpGlobalSetup.prevSlide = {
    ...cpGlobalSetup.currentSlide,
  };
}

export function setNextSlideData() {
  window.cpGlobalSetup.nextSlide = {
    ...cpGlobalSetup.slidesObjArray[cpInfoCurrentSlide],
  };
}
