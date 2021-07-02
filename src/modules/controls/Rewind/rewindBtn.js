import { hidePlayPause, stayMute } from "../globalButton";
import { fetchGlobal } from "../../global/global";

// Rewind
export function rewindFunc() {
  var rewindTime = 90;

  var firstFrame = fetchGlobal("firstFrame");

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
