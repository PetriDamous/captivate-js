import { hidePlayPause } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalObjFunctions";
import { isTogglePausePlay } from "../PausePlay/pausePlaySettings";

let paused = 1;

// Pause
export function pauseFunc() {
  const {
    currentSlide: { to: lastFrame },
  } = fetchGlobal("slideData");

  cpCmndPause = paused;

  if (isTogglePausePlay) {
    cpInfoCurrentFrame < lastFrame - 1
      ? hidePlayPause("Pause")
      : hidePlayPause("Play");
  }
}
