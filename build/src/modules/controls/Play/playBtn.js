import { hidePlayPause, stayMute } from "../globalButton";
import { playVideo } from "../Video/video";

// Play
export function playFunc(lastFrame) {
  playVideo();

  if (cpInfoCurrentFrame < lastFrame - 1) {
    cpCmndResume = 1;
    hidePlayPause("Play");
    stayMute();
  } else {
    cpCmndPause = 1;
    hidePlayPause("Play");
  }
}
