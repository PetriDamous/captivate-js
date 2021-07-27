import { stayMute, hidePlayPause } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalObjFunctions";
// import { firstFrame } from "../../../index";

export function replayFunc() {
  const { from: firstFrame } = fetchGlobal("currentSlide");

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
