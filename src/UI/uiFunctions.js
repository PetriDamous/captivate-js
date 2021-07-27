import { getElement } from "../utilities/utilities";

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
export function hidePlayPause($hideElm) {
  const $showElm = $hideElm.toLowerCase() === "play" ? "Pause" : "Play";
  hideShow($hideElm, $showElm);
}

// Toggle between hiding and showing mute and unmute
export function hideMuteUnmute($hideElm) {
  const $showElm = $hideElm.toLowerCase() === "mute" ? "Unmute" : "Mute";
  hideShow($hideElm, $showElm);
}

function hideShow($hideElm, $showElm) {
  cp.hide(getElement($hideElm, "id"));
  cp.show(getElement($showElm, "id"));
}

function toggleMuteUnmute($hideElm, boolean) {
  if (boolean) {
    hideMuteUnmute($hideElm);
  }
}

// Gets a list of button elements
export function getButtonsArray(name) {
  const $btnsArray = document.querySelectorAll(`div[data-button="${name}"]`);

  return Array.prototype.slice.call($btnsArray);
}
