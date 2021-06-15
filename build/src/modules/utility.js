// Custome settings for cousrse lessons
export function customSettings() {
  if (cpInfoCurrentSlideLabel.indexOf("Intro Video") !== -1) {
    cp.show("SmartShape_114");
    cp.show("Image_372");
    cp.show("Image_371");
    cp.show("Image_370");
    cpCmndPause = true;
    hidePause();
  }

  if (cpInfoCurrentSlideLabel.indexOf("Pre-Test") !== -1) {
    cp.hide(getElement("Play", "id"));
    cp.hide(getElement("Pause", "id"));
    disableMenuStyle();
  }

  if (cpInfoCurrentSlideLabel.indexOf("Pre-Test") !== -1) {
    disableMenuStyle();
  }
}

export function isValueInArray(array, value) {
  return array.some(function (elm) {
    return elm === value;
  });
}

export function getElementAttr(elm, attr) {
  return document
    .querySelector('div[data-button="' + elm + '"]')
    .getAttribute(attr);
}

export function clearStorageUnload() {
  // Clears local storage when window is closed
  window.addEventListener("beforeunload", function () {
    localStorage.clear();
  });
}

export function applyStyles(cssStyleList, elmToApply) {
  cssStyleList.forEach(function (style) {
    elmToApply.style[style[0]] = style[1];
  });
}
