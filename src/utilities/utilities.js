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

/*******************************
 *
 * Array Functions
 *
 *******************************/

// Checks to if single value is in array
// Returns true or false
export function isValueInArray(array, value) {
  return array.some((elm) => elm === value);
}

// Checks to see if value matches all values in array
// Returns true or false
export function valueMatchAllVaulesArray(array, value) {
  return array.every((elm) => elm === value);
}

// At least one array value is in another array
// None nested arrays only
// Returns true or false
export function arrayValueInArray(array1, array2) {
  return (returnValue = array1.some((elm) => {
    const value = elm;
    return array2.some((elm) => elm === value);
  }));
}

/***********************************************************************
 *  1st arg array whos values are arrays
 * 
 *  2nd arg flat array
 * 
 *  If all values in 2nd arg matches
 *    at least one array value in 1st arg
 *    true is returned otherwise false
 *
 *  Dependant on isValueInArray()
 * 
 *  Example: 
 *    const array1 = ["Unmute", "Mute"]

      const nestedArray = [["Play", "Pause"], ["Mute", "Unmute"]]

      arrayValueInNestedArray(nestedArray, array1) //true
 ***********************************************************************/

export function arrayValueInNestedArray(nestedArray, array) {
  return nestedArray.some((singleArray) => {
    return singleArray.every((singleValue) =>
      isValueInArray(array, singleValue)
    );
  });
}

/*************************************
 * Returns true or false
 *  if some values from an
 *  array match the values
 *  inside of another array
 *
 * 1st arg array
 * 2nd arg array*
 *
 *
 ****************************************/

export function isSomeArrayMatching(array1, array2) {
  return array1.every((elm) => isValueInArray(array2, elm));
}

/*****************************************
 * Checks to see if values in
 *  array are identical
 *
 * Takes in two arrays
 *
 * Returns true or false
 *
 * Arrays must be same length
 *  if not false is returned
 *
 * Dependant on isValueInArray()
 ****************************************/

export function isArrayMatching(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (!isValueInArray(array1, array2[i])) {
      return false;
    }
  }

  return true;
}

/*******************************************
 * Finds matching array in nested array
 *
 * Returns matching array if found
 *
 * Dependant on isArrayMatching()
 *
 *******************************************/

export function findMatchingArray(nestedArray, array) {
  for (let i = 0; i < nestedArray.length; i++) {
    if (isArrayMatching(nestedArray[i], array)) {
      return nestedArray[i];
    }
  }

  console.log("Array cannot be found");
}

// Fetches the element or ID
export function getElement(
  name,
  property = "obj",
  elm = "div",
  type = "button"
) {
  const $elment = document.querySelector(`${elm}[data-${type}="${name}"]`);
  return property === "obj" ? $elment : $elment.getAttribute("id");
}

export function getElementAttr(name, attr, elm = div) {
  return document
    .querySelector(`${elm}[data-button="${name}"]`)
    .getAttribute(attr);
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
