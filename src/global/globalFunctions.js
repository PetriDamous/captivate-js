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

// Fetches the element or ID
export function getElement(name, property, elm = "div", type = "button") {
  return property === "obj"
    ? document.querySelector(elm + "[data-" + type + '="' + name + '"]')
    : document
        .querySelector(elm + "[data-" + type + '="' + name + '"]')
        .getAttribute("id");
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

// Removes event lisenters from single elements
// or multiple ones
export function removeEvents(targets, types, listeners) {
  // Used if all params are an array
  // If you need multiple different events removed from different objects
  // you can pass them as an array

  if (
    typeof targets === "object" &&
    typeof types === "object" &&
    listeners == "object"
  ) {
    targets.forEach(function (target, idx) {
      target.removeEventListener(types[idx], listeners[idx]);
    });

    return;
  }

  // Used if target and types are an array
  // If you need to remove the same function from
  // Different events and objects

  if (typeof targets === "object" && typeof types === "object") {
    targets.forEach(function (target, idx) {
      target.removeEventListener(types[idx], listeners);
    });

    return;
  }

  // Used if types and listeners are an array
  // If you need to remove different event listeners and functions
  // from a single object

  if (typeof types === "object" && typeof listeners === "object") {
    types.forEach(function (type, idx) {
      target.removeEventListener(type, listeners[idx]);
    });

    return;
  }

  // Used if targets and listeners is an array
  // If you need to remove different functions from different
  // objects from a single event listener (not sure if there is point to this one but I will leave it in)

  if (typeof targets === "object" && typeof listeners === "object") {
    targets.forEach(function (target, idx) {
      target.removeEventListener(type, listeners[idx]);
    });

    return;
  }

  // Used if target is an array
  // If you need to remove the same eventListener and event
  // from different objects

  if (typeof targets === "object") {
    targets.forEach(function (target) {
      target.removeEventListener(types, listeners);
    });

    return;
  }

  target.removeEventListener(types, listeners);
}
