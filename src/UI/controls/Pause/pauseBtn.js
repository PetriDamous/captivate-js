import { hidePlayPause } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalSettings";

// Pause
export function pauseFunc() {
  const { to: lastFrame } = fetchGlobal("currentSlide");

  if (cpInfoCurrentFrame < lastFrame - 1) {
    cpCmndPause = 1;
    hidePlayPause("Pause");
  } else {
    cpCmndPause = 1;
    hidePlayPause("Play");
  }
}
