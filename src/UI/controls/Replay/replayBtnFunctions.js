import { stayMute, hidePlayPause } from "../../uiFunctions";

const play = 1;
const delayTimeOut = 300;

// Delays replay for progress bar
export function replayDelayProgressBar() {
  if (cpCmndPause) {
    setTimeout(function () {
      cpCmndResume = play;
    }, delayTimeOut);
  }
}

export function closeTocOnReplay() {
  if (cpCmndTOCVisible === true) {
    cpCmndTOCVisible = false;
    hidePlayPause("Play");
    stayMute();
  } else {
    hidePlayPause("Play");
    stayMute();
  }
}
