import { addEvents, removeEvents } from "../../../global/globalFunctions";
import { getButtonsArray } from "../../uiFunctions";

// Import Button Actions
import { ccFunc_auto } from "../Close-Caption/closeCaption-auto";
import { ccFunc_manual } from "../../components/Close-Caption/closeCaption-manuel";
import { rewindFunc } from "../Rewind/rewindBtn";
import { replayFunc } from "../Replay/replayBtn";
import { playFunc } from "../Play/playBtn";
import { pauseFunc } from "../Pause/pauseBtn";
import { menuFunc } from "../Menu/menuBtn";
import { muteFunc } from "../Mute/muteBtn";
import { unmuteFunc } from "../Unmute/unmuteBtn";

export function setBtnEvents() {
  const $menuBtns = getButtonsArray("Menu");
  const $glossaryBtns = getButtonsArray("Glossary");
  const $referneceBtns = getButtonsArray("Referneces");
  const $exitBtns = getButtonsArray("Exit");
  const $playBtns = getButtonsArray("Play");
  const $pauseBtns = getButtonsArray("Pause");
  const $previousBtns = getButtonsArray("Previous");
  const $nextBtns = getButtonsArray("Next");
  const $rewindBtns = getButtonsArray("Rewind");
  const $closeCaptionBtns = getButtonsArray("Closed Caption");

  addEvents($closeCaptionBtns, "click", ccFunc_auto);
  addEvents($playBtns, "click", playFunc);
  addEvents($pauseBtns, "click", pauseFunc);
  addEvents($rewindBtns, "click", rewindFunc);
}
