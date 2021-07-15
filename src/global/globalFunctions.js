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
  return array.some((elm) => elm === value);
}

// Fetches the element or ID
export function getElement(name, property, elm = "div", type = "button") {
  return property === "obj"
    ? document.querySelector(`${elm}[data-${type}="${name}"]`)
    : document
        .querySelector(`${elm}[data-${type}="${name}"]`)
        .getAttribute("id");
}

export function getElementAttr(name, attr, elm = div) {
  return document
    .querySelector(`${elm}[data-button="${name}"]`)
    .getAttribute(attr);
}

// Clears local storage when window is closed
export function clearStorageUnload() {
  window.addEventListener("beforeunload", (e) => {
    localStorage.clear();
  });
}

export function applyStyles(cssStyleList, elmToApply) {
  cssStyleList.forEach((style) => {
    elmToApply.style[style[0]] = style[1];
  });
}

// Adds event lisenters from single elements
// or multiple elements
export function addEvents(target, type, listener) {
  // Adds different events to different functions and different elements
  // All function params must be an array
  if (
    typeof target === "object" &&
    typeof type === "object" &&
    typeof listener === "object"
  ) {
    target.forEach((elm, idx) => {
      elm.addEventListener(type[idx], listener[idx]);
    });

    return;
  }

  // Adds same event and function to multiple elements
  // target must be an array of elements
  if (typeof target === "object") {
    target.forEach((elm) => {
      elm.addEventListener(type, listener);
    });

    return;
  }

  target.addEventListener(type, listener);
}

// Removes event lisenters from single elements
// or multiple elements
export function removeEvents(target, type, listener) {
  // Removes different events from different functions and different elements
  // All function params must be an array
  if (
    typeof target === "object" &&
    typeof type === "object" &&
    typeof listener === "object"
  ) {
    target.forEach((elm, idx) => {
      elm.removeEventListener(type[idx], listener[idx]);
    });

    return;
  }

  // Removes same event and function to multiple elements
  // target must be an array of elements
  if (typeof target === "object") {
    target.forEach((target) => {
      target.removeEventListener(type, listener);
    });

    return;
  }

  target.removeEventListener(type, listener);
}
