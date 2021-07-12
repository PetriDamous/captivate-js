import { hidePlayPause } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalSettings";
import { isValueInArray, getElement } from "../../../global/globalFunctions";
import { projectVideos } from "./videoSettings";

// Hides Nav Play button if video play button is clicked
export function videoPlayBtn() {
  const { currentVideo } = findCurrentVideo();

  var $videoPlayBtn = document.getElementById(currentVideo.videoPlayBtn);

  $videoPlayBtn.addEventListener("click", function () {
    hidePlayPause("Play");

    currentVideo.videoElmsHideShow.forEach(function (elmId) {
      cp.hide(elmId);
    });

    cpCmndResume = 1;
  });
}

// Allows nav bar play button to play video on slides
// Place inside of play button
export function playVideo() {
  if (!isVideo()) return;

  const { currentVideo } = findCurrentVideo();

  currentVideo.videoElmsHideShow.forEach(function (elmId) {
    cp.hide(elmId);
  });
}

// Rests video on slide enter
export function videoRest() {
  const { currentVideo } = findCurrentVideo();

  const $video = document.getElementById(currentVideo.video);

  $video.pause();

  currentVideo.videoElmsHideShow.forEach(function (elmId) {
    cp.show(elmId);
  });

  cpCmndPause = 1;
  hidePlayPause("Pause");
}

export function videoUnlock() {
  if (!isVideo()) return;

  const { currentVideo, currentSlide } = findCurrentVideo();

  if (!localStorage.getItem("viewedVidoes")) {
    localStorage.setItem("viewedVidoes", JSON.stringify([]));
  }

  var viewedVidoes = JSON.parse(localStorage.getItem("viewedVidoes"));

  if (isValueInArray(viewedVidoes, currentSlide.lb)) {
    currentVideo.unlockElms.forEach(function (elms) {
      cp.hide(elms);
    });

    cp.show(getElement("Next", "id"));
    return;
  }

  cpAPIEventEmitter.addEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    addVideoToStorage,
    "cpInfoCurrentFrame"
  );
}

export function addVideoToStorage() {
  if (!isVideo()) return;

  const { currentVideo, currentSlide } = findCurrentVideo();

  if (cpInfoCurrentFrame >= currentVideo.videoEndFrame) {
    var viewedVidoes = JSON.parse(localStorage.getItem("viewedVidoes"));

    if (!isValueInArray(viewedVidoes, currentSlide.lb)) {
      viewedVidoes.push(currentSlide.lb);
      localStorage.setItem("viewedVidoes", JSON.stringify(viewedVidoes));
    }
  }
}

function isVideo() {
  const { currentVideo } = findCurrentVideo();

  return currentVideo;
}

function findCurrentVideo() {
  var currentSlide = fetchGlobal("currentSlide");

  for (var i = 0; i < projectVideos.length; i++) {
    if (projectVideos[i].videoSlideLabel === currentSlide.lb.trim()) {
      return { currentVideo: projectVideos[i], currentSlide };
    }
  }

  return {
    currentVideo: null,
    currentSlide,
  };
}

// Put on slide exit
export function removeVideoEvent() {
  if (!isVideo) return;

  cpAPIEventEmitter.removeEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    addVideoToStorage,
    "cpInfoCurrentFrame"
  );
}

export function videoInitialize() {
  if (!isVideo()) return;

  videoRest();
  videoPlayBtn();
  videoUnlock();
}