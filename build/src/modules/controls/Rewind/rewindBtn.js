import { hidePlayPause, stayMute } from "../globalButton";
import { firstFrame } from "../../../index";

// Rewind
export function rewindFunc() {
  var rewindTime = 90;

  if (
    cpInfoCurrentFrame != firstFrame &&
    cpInfoCurrentFrame > firstFrame + rewindTime
  ) {
    cpCmndGotoFrameAndResume = cpInfoCurrentFrame - rewindTime;
    hidePlayPause("Play");
    stayMute();
    cpCmndTOCVisible = 0;
  } else {
    cpCmndGotoFrameAndResume = firstFrame;
    hidePlayPause("Play");
    stayMute();
    cpCmndTOCVisible = 0;
  }
}
