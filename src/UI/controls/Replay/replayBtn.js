import { fetchGlobal } from "../../../global/globalObjFunctions";
import { replayDelayProgressBar, closeTocOnReplay } from "./replayBtnFunctions";
import replaySettings from "./replayBtnSettings";
import { gotoFrame } from "../../../Custom-Captivate/customFunctions";

export function replayFunc() {
  const {
    currentSlide: { from: firstFrame },
  } = fetchGlobal("slideData");

  const { isProgressBar, isTocCloseOnReplay } = replaySettings;

  gotoFrame(firstFrame);

  if (isProgressBar) {
    replayDelayProgressBar();
  }

  if (isTocCloseOnReplay) {
    closeTocOnReplay();
  }
}
