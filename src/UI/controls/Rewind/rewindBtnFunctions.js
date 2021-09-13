import { hidePlayPause } from "../../uiFunctions";
import { getElement } from "../../../utilities/utilities";
import { isTogglePausePlay } from "../PausePlay/pausePlaySettings";
import { openCloseToc } from "../../../Custom-Captivate/customFunctions";
import rewindSettings from "./rewindBtnSettings";

export function handlePlay() {
  const $playBtn = getElement("Play");

  if (!$playBtn) return;

  if (isTogglePausePlay) {
    hidePlayPause("Play");
  }
}

// 3. Hide TOC or not
export function handleToc() {
  const { isCloseToc } = rewindSettings;

  if (isCloseToc) {
    openCloseToc(false);
  }
}
