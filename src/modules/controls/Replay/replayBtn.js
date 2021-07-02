import { stayMute, hidePlayPause } from "../globalButton";
import { fetchGlobal } from "../../global/global";
// import { firstFrame } from "../../../index";

export function replayFunc() {
  var firstFrame = fetchGlobal("firstFrame");

  cpCmndGotoFrame = firstFrame;

  if (cpCmndPause) {
    setTimeout(function () {
      cpCmndResume = 1;
    }, 300);
  }

  if (cpCmndTOCVisible === 1) {
    cpCmndTOCVisible = 0;
    hidePlayPause("Play");
    stayMute();
  } else {
    hidePlayPause("Play");
    stayMute();
  }
}
