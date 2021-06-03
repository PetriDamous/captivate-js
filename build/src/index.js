import initialize from "./modules/initialize/initialize";
import { slideRest, getElement } from "./modules/controls/globalButton";
import { rewindFunc } from "./modules/controls/Rewind/rewindBtn";
import { replayFunc } from "./modules/controls/Replay/replayBtn";
import { playFunc } from "./modules/controls/Play/playBtn";
import { pauseFunc } from "./modules/controls/Pause/pauseBtn";
import { menuFunc } from "./modules/controls/Menu/menuBtn";
import { muteFunc } from "./modules/controls/Mute/muteBtn";
import { unmuteFunc } from "./modules/controls/Unmute/unmuteBtn";
import { videoRest, videoPlayBtn } from "./modules/controls/Video/video";

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
      var slides = cp.model.data.project_main.slides.split(",");

      // Current Slide
      var currentSlide = cp.model.data[slides[window.cpInfoCurrentSlide - 1]];

      // lastFrame is the last frame for the current slide
      var lastFrame = currentSlide.to;

      // firstFrame is the starting frame
      var firstFrame = currentSlide.from;

      // Checks for audio on slide
      var slideAudioName = currentSlide.audioName;

      initialize();
      slideRest();
      videoRest();
      videoPlayBtn();

      // Buttons
      $(getElement("Play", "obj")).click(function () {
        playFunc(lastFrame);
      });

      $(getElement("Pause", "obj")).click(function () {
        pauseFunc(lastFrame);
      });

      $(getElement("Rewind", "obj")).click(function () {
        rewindFunc(firstFrame);
      });

      $(getElement("Replay", "obj")).click(function () {
        replayFunc(firstFrame);
      });

      $(getElement("Menu", "obj")).click(function () {
        menuFunc();
      });

      $(getElement("Mute", "obj")).click(function () {
        muteFunc();
      });

      $(getElement("Unmute", "obj")).click(function () {
        unmuteFunc();
      });
    });
  });
});
