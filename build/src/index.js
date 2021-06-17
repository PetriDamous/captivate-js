import { setupGlobal } from "./modules/global/global";
import { initialize } from "./modules/initialize/initialize";
import { getButtonsList } from "./modules/controls/globalButton";

// Import Button Actions
import { ccFunc_auto } from "./modules/controls/Close-Caption/closeCaption-auto";
import { ccFunc_manual } from "./modules/components/Close-Caption/closeCaption-manuel";
import { rewindFunc } from "./modules/controls/Rewind/rewindBtn";
import { replayFunc } from "./modules/controls/Replay/replayBtn";
import { playFunc } from "./modules/controls/Play/playBtn";
import { pauseFunc } from "./modules/controls/Pause/pauseBtn";
import { menuFunc } from "./modules/controls/Menu/menuBtn";
import { muteFunc } from "./modules/controls/Mute/muteBtn";
import { unmuteFunc } from "./modules/controls/Unmute/unmuteBtn";

window.addEventListener("moduleReadyEvent", function (e) {
  setupGlobal();
  //evt.Data carries the interface object.
  //It is same as window.cpAPIInterface
  // var interfaceObj = e.Data;
  // console.log(interfaceObj)
  // var eventEmitterObj = interfaceObj.getEventEmitter();
  // console.log(eventEmitterObj)

  window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", function (e) {
    $(document).ready(function () {
      initialize();

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

      // Buttons

      $closeCaptionBtns.forEach(function (ccBtn) {
        // ccBtn.addEventListener("click", ccFunc_auto);
        ccBtn.addEventListener("click", ccFunc_auto);
      });

      $playBtns.forEach(function (playBtn) {
        playBtn.addEventListener("click", playFunc);
      });

      $pauseBtns.forEach(function (pauseBtn) {
        pauseBtn.addEventListener("click", pauseFunc);
      });

      $rewindBtns.forEach(function (rewindBtn) {
        rewindBtn.addEventListener("click", rewindFunc);
      });
    });
  });
});
