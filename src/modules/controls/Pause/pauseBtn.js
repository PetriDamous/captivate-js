import { hidePlayPause } from "../globalButton";
import { fetchGlobal } from "../../global/global";

// Pause
export function pauseFunc() {
  var lastFrame = fetchGlobal("lastFrame");

  if (cpInfoCurrentFrame < lastFrame - 1) {
    cpCmndPause = 1;
    hidePlayPause("Pause");
  } else {
    cpCmndPause = 1;
    hidePlayPause("Play");
  }
}
