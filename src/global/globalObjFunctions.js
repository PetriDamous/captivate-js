/****************************
  Fetch Functions
****************************/

export function fetchGlobal(prop) {
  return window.cpGlobalObj[prop];
}

/****************************
  Set Functions
****************************/

export function setGlobalValue(prop, value) {
  window.cpGlobalObj[prop] = value;
}

/****************************
  Set Meta Data
****************************/

export function setContentMeta() {
  const $metaContentNodeList = document.querySelectorAll("meta");

  for (let i = 0; i < $metaContentNodeList.length; i++) {
    if ($metaContentNodeList[i].getAttribute("content") === "IE=10") {
      $metaContentNodeList[i].setAttribute("content", "IE=11");
      return;
    }
  }
}

/****************************
  Slide Data Functions
****************************/

export function setSlideData() {
  const slidesIdArray = cp.model.data.project_main.slides.split(",");

  const slidesObjArray = slidesIdArray.map((slideId) => {
    return cp.model.data[slideId];
  });

  const firstSlide = slidesObjArray[0];

  const lastSlide = slidesObjArray[slidesObjArray.length - 1];

  setGlobalValue("slideData", {
    ...cpGlobalObj.slideData,
    slidesIdArray: [...slidesIdArray],
  });
  setGlobalValue("slideData", {
    ...cpGlobalObj.slideData,
    slidesObjArray: [...slidesObjArray],
  });
  setGlobalValue("slideData", {
    ...cpGlobalObj.slideData,
    firstSlide: { ...firstSlide },
  });
  setGlobalValue("slideData", {
    ...cpGlobalObj.slideData,
    lastSlide: { ...lastSlide },
  });
}

export function setPrevSlideData() {
  setGlobalValue("slideData", {
    ...cpGlobalObj.slideData,
    prevSlide: { ...cpGlobalObj.slideData.currentSlide },
  });
}

export function setNextSlideData() {
  setGlobalValue("slideData", {
    ...cpGlobalObj.slideData,
    nextSlide: { ...cpGlobalObj.slideData.slidesObjArray[cpInfoCurrentSlide] },
  });
}
