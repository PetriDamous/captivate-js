import { hidePlayPause } from "../globalButton";
import { stayMute } from "../globalButton";

// Play
export function playFunc(lastFrame) {
  if (cpInfoCurrentFrame < lastFrame - 1) {
    cpCmndResume = 1;
    hidePlayPause("Play");
    stayMute();
  } else {
    cpCmndPause = 1;
    hidePlayPause("Play");
  }
}
