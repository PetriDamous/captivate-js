import { addEvents, removeEvents } from "../../../global/globalFunctions";
import { getButtonsList } from "../../uiFunctions";

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
  var $menuBtns = getButtonsList("Menu");
  var $glossaryBtns = getButtonsList("Glossary");
  var $referneceBtns = getButtonsList("Referneces");
  var $exitBtns = getButtonsList("Exit");
  var $playBtns = getButtonsList("Play");
  var $pauseBtns = getButtonsList("Pause");
  var $previousBtns = getButtonsList("Previous");
  var $nextBtns = getButtonsList("Next");
  var $rewindBtns = getButtonsList("Rewind");
  var $closeCaptionBtns = getButtonsList("Closed Caption");

  addEvents($closeCaptionBtns, "click", ccFunc_auto);
  addEvents($playBtns, "click", playFunc);
  addEvents($pauseBtns, "click", pauseFunc);
  addEvents($rewindBtns, "click", rewindFunc);
}
