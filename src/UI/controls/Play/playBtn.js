import { hidePlayPause, stayMute } from "../../uiFunctions";
import { playVideo } from "../Video/video";
import { fetchGlobal } from "../../../global/globalSettings";

// Play
export function playFunc() {
  const { to: lastFrame } = fetchGlobal("currentSlide");

  playVideo();

  cpCmndResume = 1;

  if (fetchGlobal("isTogglePausePlay")) {
    hidePlayPause("Play");
  }

  if (cpInfoCurrentFrame < lastFrame - 1) {
    stayMute();
  }
}
