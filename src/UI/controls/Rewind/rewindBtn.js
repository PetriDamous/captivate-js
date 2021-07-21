import { hidePlayPause, stayMute } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalSettings";

// Rewind
export function rewindFunc() {
  const rewindTime = 90;

  const { from: firstFrame } = fetchGlobal("currentSlide");

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
