import { stayMute, hidePlayPause } from "../../uiFunctions";
import {
  resume,
  openCloseToc,
} from "../../../Custom-Captivate/customFunctions";
import { isTogglePausePlay } from "../PausePlay/pausePlaySettings";

const delayTimeOut = 300;

// Delays replay for progress bar
export function replayDelayProgressBar() {
  if (cpCmndPause) {
    setTimeout(() => {
      resume(true);
    }, delayTimeOut);
  }
}

export function closeTocOnReplay() {
  if (cpCmndTOCVisible === true) {
    openCloseToc(false);
    handlePlay();
    stayMute();
  } else {
    handlePlay();
    stayMute();
  }
}

function handlePlay() {
  if (isTogglePausePlay) {
    hidePlayPause("Play");
  }
}
