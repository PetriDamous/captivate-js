import { hidePlayPause, stayMute } from "../../uiFunctions";
import { playVideo } from "../Video/video";
import { isTogglePausePlay } from "../PausePlay/pausePlaySettings";
import { fetchGlobal } from "../../../global/globalObjFunctions";

let play = 1;

// Play
export function playFunc() {
  const {
    currentSlide: { to: lastFrame },
  } = fetchGlobal("slideData");

  playVideo();

  cpCmndResume = play;

  if (isTogglePausePlay) {
    hidePlayPause("Play");
  }

  if (cpInfoCurrentFrame < lastFrame - 1) {
    stayMute();
  }
}
