import { hidePlayPause, stayMute } from "../../uiFunctions";
import { playVideo } from "../Video/video";
import { fetchGlobal } from "../../../global/globalObjFunctions";

// Play
export function playFunc() {
  const {
    currentSlide: { to: lastFrame },
  } = fetchGlobal("slideData");

  const { isTogglePausePlay } = fetchGlobal("buttonOptions");

  playVideo();

  cpCmndResume = 1;

  if (isTogglePausePlay) {
    hidePlayPause("Play");
  }

  if (cpInfoCurrentFrame < lastFrame - 1) {
    stayMute();
  }
}
