import { hidePlayPause } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalObjFunctions";
import { isTogglePausePlay } from "../pausePlay/pausePlaySettings";

// Pause
export function pauseFunc() {
  const {
    currentSlide: { to: lastFrame },
  } = fetchGlobal("slideData");

  cpCmndPause = 1;

  if (isTogglePausePlay) {
    cpInfoCurrentFrame < lastFrame - 1
      ? hidePlayPause("Pause")
      : hidePlayPause("Play");
  }
}
