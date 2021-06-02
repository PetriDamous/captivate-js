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

// Fetches the element or ID
export function getElement(attribute, property) {
  return property === "obj"
    ? document.querySelector('div[data-button="' + attribute + '"]')
    : document
        .querySelector('div[data-button="' + attribute + '"]')
        .getAttribute("id");
}

/////////////////////// Nav bar funtions ////////////////////////////

// When mute is on keeps audio muted on slide change
export function stayMute(cpCmndMute) {
  if (cpCmndMute == true) {
    cpCmndMute = true;
  } else {
    cpCmndMute = false;
  }
}

// Hides play button
export function hidePlayPause(hideElm) {
  console.log(hideElm);
  hideElm = hideElm.toUpperCase();
  var showElm = hideElm.toLowerCase() === "play" ? "Pause" : "Play";
  // hide play
  cp.hide(getElement(hideElm, "id"));
  // show pause
  cp.show(getElement(showElm, "id"));
}

// Rests UI controls when entering new slide
export function slideRest() {
  cpCmndTOCVisible = false;
  cp.show(getElement("Pause", "id"));
  cp.hide(getElement("Play", "id"));
  stayMute();
}
