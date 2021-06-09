import { initialize } from "./modules/initialize/initialize";
import { slideRest, getElement } from "./modules/controls/globalButton";
import { getButtonsList } from "./modules/controls/globalButton";
import {
  ccFunc,
  ccToolTip,
  ccBoxOnEnter_auto,
} from "./modules/controls/Close-Caption/closeCaption-auto";

import {
  openCCBox,
  ccBoxOnEnter_manuel,
} from "./modules/controls/Close-Caption/closeCaption-manuel";
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

// List of slides in project
var slides;

// Current Slide
var currentSlide;

// lastFrame is the last frame for the current slide
var lastFrame;

// firstFrame is the starting frame
var firstFrame;

// Checks for audio on slide
var slideAudioName;

window.addEventListener("moduleReadyEvent", function (e) {
  //evt.Data carries the interface object.
  //It is same as window.cpAPIInterface
  // var interfaceObj = e.Data;
  // console.log(interfaceObj)
  // var eventEmitterObj = interfaceObj.getEventEmitter();
  // console.log(eventEmitterObj)

  window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", function (e) {
    $(document).ready(function () {
      // Grabs the list of slides from the project and splits them into an array
      slides = cp.model.data.project_main.slides.split(",");

      currentSlide = cp.model.data[slides[window.cpInfoCurrentSlide - 1]];

      lastFrame = currentSlide.to;

      firstFrame = currentSlide.from;

      slideAudioName = currentSlide.audioName;

      initialize();
      slideRest();
      // ccToolTip();
      // ccBoxOnEnter_auto();
      ccBoxOnEnter_manuel();
      videoRest();
      videoPlayBtn();
      videoCompletion();

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
        ccBtn.addEventListener("click", openCCBox);
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

export var currentSlide, firstFrame, lastFrame, slideAudioName;
