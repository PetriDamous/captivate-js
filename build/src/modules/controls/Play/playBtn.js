import { hidePlayPause } from "../../utility";

// Play
export function playFunc(lastFrame) {
  if (cpInfoCurrentFrame < lastFrame - 1) {
    cpCmndResume = 1;
    hidePlayPause("play");
    stayMute();
  } else {
    cpCmndPause = 1;
    hidePlayPause("play");
  }
}
