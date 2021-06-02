import { hidePlayPause } from "../../utility";

// Pause
export function pauseFunc(lastFrame) {
  if (cpInfoCurrentFrame < lastFrame - 1) {
    cpCmndPause = 1;
    hidePlayPause("pause");
    // hidePause();
  } else {
    cpCmndPause = 1;
    hidePlayPause("play");
    // hidePlay();
  }
}
