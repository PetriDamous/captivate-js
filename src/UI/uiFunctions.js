import { getElement } from "../global/globalFunctions";

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

// Toggle between hiding and showing play and pause
export function hidePlayPause(hideElm) {
  var showElm = hideElm.toLowerCase() === "play" ? "Pause" : "Play";
  cp.hide(getElement(hideElm, "id"));
  cp.show(getElement(showElm, "id"));
}

// Toggle between hiding and showing mute and unmute
export function hideMuteUnmute(hideElm) {
  var showElm = hideElm.toLowerCase() === "mute" ? "Unmute" : "Mute";
  cp.hide(getElement(hideElm, "id"));
  cp.show(getElement(showElm, "id"));
}

// Gets a list of button elements
export function getButtonsList(name) {
  // Grabs multiple instances of button layers
  var $btnsList = document.querySelectorAll('div[data-button="' + name + '"]');

  return Array.prototype.slice.call($btnsList);
}
