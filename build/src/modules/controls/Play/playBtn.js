import { hidePlayPause, stayMute } from "../globalButton";
import { playVideo } from "../Video/video";
import { lastFrame } from "../../../index";

// Play
export function playFunc() {
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
