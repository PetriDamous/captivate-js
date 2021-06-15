import {
  setupGlobal,
  fetchGlobal,
  setGlobalValue,
} from "./modules/global/global";
import { initialize } from "./modules/initialize/initialize";
import { slideRest, getElement } from "./modules/controls/globalButton";
import { getButtonsList } from "./modules/controls/globalButton";
import {
  ccFunc_auto,
  ccToolTip_auto,
  ccBoxOnEnter_auto,
} from "./modules/controls/Close-Caption/closeCaption-auto";

import {
  ccFunc_manual,
  ccBoxOnEnter_manuel,
} from "./modules/components/Close-Caption/closeCaption-manuel";
import { rewindFunc } from "./modules/controls/Rewind/rewindBtn";
import { replayFunc } from "./modules/controls/Replay/replayBtn";
import { playFunc } from "./modules/controls/Play/playBtn";
import { pauseFunc } from "./modules/controls/Pause/pauseBtn";
import { menuFunc } from "./modules/controls/Menu/menuBtn";
import { muteFunc } from "./modules/controls/Mute/muteBtn";
import { unmuteFunc } from "./modules/controls/Unmute/unmuteBtn";
import {
  videoRest,
  videoPlayBtn,
  videoCompletion,
} from "./modules/controls/Video/video";

import { initializeProgressBar } from "./modules/components/Progress-Bar/progressBar";

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
      // Grabs the list of slides from the project and splits them into an array
      var slides = cp.model.data.project_main.slides.split(",");

      var currentSlide = cp.model.data[slides[window.cpInfoCurrentSlide - 1]];

      var slideLabel = currentSlide.lb;

      var lastFrame = currentSlide.to;

      var firstFrame = currentSlide.from;

      var slideAudioName = currentSlide.audioName;

      var propToSetList = [
        "slides",
        "currentSlide",
        "lastFrame",
        "firstFrame",
        "slideAudioName",
        "slideLabel",
      ];

      var valueToSetList = [
        slides,
        currentSlide,
        lastFrame,
        firstFrame,
        slideAudioName,
        slideLabel,
      ];

      setGlobalValue(propToSetList, valueToSetList);

      initialize();
      slideRest();
      // ccToolTip_auto();
      // ccBoxOnEnter_auto();
      ccBoxOnEnter_manuel();
      videoRest();
      videoPlayBtn();
      videoCompletion();
      initializeProgressBar();

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
