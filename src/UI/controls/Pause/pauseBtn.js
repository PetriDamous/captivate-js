import { hidePlayPause } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalObjFunctions";

// Pause
export function pauseFunc() {
  const {
    currentSlide: { to: lastFrame },
  } = fetchGlobal("slideData");

  const { isTogglePausePlay } = fetchGlobal("buttonOptions");

  cpCmndPause = 1;

  if (isTogglePausePlay) {
    cpInfoCurrentFrame < lastFrame - 1
      ? hidePlayPause("Pause")
      : hidePlayPause("Play");
  }
}
