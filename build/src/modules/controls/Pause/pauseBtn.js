import { hidePlayPause } from "../globalButton";
import { lastFrame } from "../../../index";

// Pause
export function pauseFunc() {
  if (cpInfoCurrentFrame < lastFrame - 1) {
    cpCmndPause = 1;
    hidePlayPause("Pause");
  } else {
    cpCmndPause = 1;
    hidePlayPause("Play");
  }
}
