import { hidePlayPause } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalObjFunctions";

// Pause
export function pauseFunc() {
  const { to: lastFrame } = fetchGlobal("currentSlide");

  cpCmndPause = 1;

  if (fetchGlobal("isTogglePausePlay")) {
    cpInfoCurrentFrame < lastFrame - 1
      ? hidePlayPause("Pause")
      : hidePlayPause("Play");
  }
}
