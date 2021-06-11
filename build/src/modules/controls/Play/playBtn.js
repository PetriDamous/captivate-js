import { hidePlayPause, stayMute } from "../globalButton";
import { playVideo } from "../Video/video";
import { fetchGlobal } from "../../global/global";

// Play
export function playFunc() {
  var lastFrame = fetchGlobal("lastFrame");

  playVideo();

  if (cpInfoCurrentFrame < lastFrame - 1) {
    cpCmndResume = 1;
    hidePlayPause("Play");
    stayMute();
  } else {
    cpCmndPause = 1;
    hidePlayPause("Play");
  }
}
