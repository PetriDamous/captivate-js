import { fetchGlobal } from "../../../global/globalObjFunctions";
import { handlePlay, handleToc } from "./rewindBtnFunctions";
import { stayMute } from "../../uiFunctions";
import { resumeAndPlay } from "../../../Custom-Captivate/customFunctions";

export function rewindFunc() {
  const rewindTime = 90;

  const {
    currentSlide: { from: firstFrame },
  } = fetchGlobal("slideData");

  if (
    cpInfoCurrentFrame !== firstFrame &&
    cpInfoCurrentFrame > firstFrame + rewindTime
  ) {
    resumeAndPlay(cpInfoCurrentFrame - rewindTime);
    handlePlay();
    stayMute();
    handleToc();
  } else {
    resumeAndPlay(firstFrame);
    handlePlay();
    stayMute();
    handleToc();
  }
}
