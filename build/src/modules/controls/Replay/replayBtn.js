import { stayMute, hidePlayPause } from "../globalButton";

export function replayFunc(firstFrame) {
  cpCmndGotoFrame = firstFrame;

  if (cpCmndPause) {
    setTimeout(function () {
      cpCmndResume = 1;
    }, 300);
  }

  if (cpCmndTOCVisible === 1) {
    cpCmndTOCVisible = 0;
    hidePlayPause("Play");
    stayMute();
  } else {
    hidePlayPause("Play");
    stayMute();
  }
}
