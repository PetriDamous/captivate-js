import { hidePlayPause } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalSettings";

// Pause
export function pauseFunc() {
  const { to: lastFrame } = fetchGlobal("currentSlide");
  const isTogglePausePlay = fetchGlobal("isTogglePausePlay");

  cpCmndPause = 1;

  if (isTogglePausePlay) {
    cpInfoCurrentFrame < lastFrame - 1
      ? hidePlayPause("Pause")
      : hidePlayPause("Play");
  }
}
