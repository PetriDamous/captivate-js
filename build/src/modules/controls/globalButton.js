// Fetches the element or ID
export function getElement(attribute, property) {
  return property === "obj"
    ? document.querySelector('div[data-button="' + attribute + '"]')
    : document
        .querySelector('div[data-button="' + attribute + '"]')
        .getAttribute("id");
}

// Rests UI controls when entering new slide
export function slideRest() {
  cpCmndTOCVisible = 0;
  hidePlayPause("Play");
  stayMute();
}

// When mute is on keeps audio muted on slide change
export function stayMute() {
  if (cpCmndMute == true) {
    cpCmndMute = true;
  } else {
    cpCmndMute = false;
  }
}

// Hides play or pause buttons
export function hidePlayPause(hideElm) {
  var showElm = hideElm.toLowerCase() === "play" ? "Pause" : "Play";
  cp.hide(getElement(hideElm, "id"));
  cp.show(getElement(showElm, "id"));
}

// Hides mute or unmute buttons
export function hideMuteUnmute(hideElm) {
  var showElm = hideElm.toLowerCase() === "mute" ? "Unmute" : "Mute";
  cp.hide(getElement(hideElm, "id"));
  cp.show(getElement(showElm, "id"));
}

// Custom play function for WQP
// Place inside of play button
export function videoPlay() {
  if (cpInfoCurrentSlideLabel.indexOf("Intro Video") !== -1) {
    cp.hide("SmartShape_114");
    cp.hide("Image_372");
    cp.hide("Image_371");
    cp.hide("Image_370");
  }
}
