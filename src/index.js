import { setupGlobal, setContentMeta } from "./global/globalSettings";
import { createStyleTag } from "./UI/components/Styles/styles";
import { initialize } from "./UI/initialize/initialize";
import { getButtonsList } from "./UI/uiFunctions";

// Import Button Actions
import { ccFunc_auto } from "./UI/controls/Close-Caption/closeCaption-auto";
import { ccFunc_manual } from "./UI/components/Close-Caption/closeCaption-manuel";
import { rewindFunc } from "./UI/controls/Rewind/rewindBtn";
import { replayFunc } from "./UI/controls/Replay/replayBtn";
import { playFunc } from "./UI/controls/Play/playBtn";
import { pauseFunc } from "./UI/controls/Pause/pauseBtn";
import { menuFunc } from "./UI/controls/Menu/menuBtn";
import { muteFunc } from "./UI/controls/Mute/muteBtn";
import { unmuteFunc } from "./UI/controls/Unmute/unmuteBtn";

window.addEventListener("load", function () {
  setContentMeta();
  setupGlobal();
  createStyleTag();
});

window.addEventListener("moduleReadyEvent", function (e) {
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
        ccBtn.addEventListener("click", ccFunc_manual);
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
