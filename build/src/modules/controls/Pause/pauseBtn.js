import { hidePlayPause } from "../globalButton";

// Pause
export function pauseFunc(lastFrame) {
  if (cpInfoCurrentFrame < lastFrame - 1) {
    cpCmndPause = 1;
    hidePlayPause("Pause");
  } else {
    cpCmndPause = 1;
    hidePlayPause("Play");
  }
}
