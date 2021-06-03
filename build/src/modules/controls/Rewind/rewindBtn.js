import { hidePlayPause, stayMute } from "../globalButton";

// Rewind
export function rewindFunc(firstFrame) {
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
