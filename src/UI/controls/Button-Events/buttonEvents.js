import { addEvents, removeEvents } from "../../../utilities/utilities";
import { getButtonsArray } from "../../uiFunctions";

// Import Button Actions
import { menuFunc } from "../Menu/menuBtn";
import { ccFunc_auto } from "../Close-Caption/closeCaption-auto";
import { ccFunc_manual } from "../../components/Close-Caption/closeCaptionFunctions-manuel";
import { rewindFunc } from "../Rewind/rewindBtn";
import { replayFunc } from "../Replay/replayBtn";
import { playFunc } from "../Play/playBtn";
import { pauseFunc } from "../Pause/pauseBtn";

import { muteFunc } from "../Mute/muteBtn";
import { unmuteFunc } from "../Unmute/unmuteBtn";

export function setBtnEvents() {
  const $menuBtns = getButtonsArray("Menu");
  const $closeCaptionBtns = getButtonsArray("Closed Caption");
  const $rewindBtns = getButtonsArray("Rewind");
  const $replayBtns = getButtonsArray("Replay");
  const $playBtns = getButtonsArray("Play");
  const $pauseBtns = getButtonsArray("Pause");
  const $muteBtns = getButtonsArray("Mute");
  const $unmuteBtns = getButtonsArray("Unmute");

  // const $glossaryBtns = getButtonsArray("Glossary");
  // const $referneceBtns = getButtonsArray("Referneces");
  // const $exitBtns = getButtonsArray("Exit");
  // const $previousBtns = getButtonsArray("Previous");
  // const $nextBtns = getButtonsArray("Next");

  /******************
    Menu actions
  *******************/
  addEvents($menuBtns, "click", menuFunc);

  /******************
    CC text actions
  *******************/
  // addEvents($closeCaptionBtns, "click", ccFunc_auto);
  addEvents($closeCaptionBtns, "click", ccFunc_manual);

  /******************
    Rewind actions
  *******************/
  addEvents($rewindBtns, "click", rewindFunc);

  /******************
    Replay actions
  *******************/
  addEvents($replayBtns, "click", replayFunc);

  /******************
    Play actions
  *******************/
  addEvents($playBtns, "click", playFunc);

  /******************
    Pause actions
  *******************/
  addEvents($pauseBtns, "click", pauseFunc);

  /******************
    Mute actions
  *******************/
  addEvents($muteBtns, "click", muteFunc);

  /******************
    Unmute actions
  *******************/
  addEvents($unmuteBtns, "click", unmuteFunc);
}
