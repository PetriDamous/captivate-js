// Developer imports
import { hidePlayPause } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalObjFunctions";
import { isValueInArray, getElement } from "../../../utilities/utilities";
import { projectVideos } from "./videoSettings";

/*
/////////////////////////////
Exported Functions
////////////////////////////
*/

// Allows nav bar play button to play video on slides
// Place inside of play button
export function playVideo() {
  if (!isVideo()) return;

  const { currentVideo } = findCurrentVideo();

  currentVideo.videoElmsHideShow.forEach((elmId) => cp.hide(elmId));
}

// Used in initialize() function
export function videoInitialize() {
  if (!isVideo()) return;
  videoRest();
  createVideoStorage();
  videoPlayBtn();

  if (isVideoUnlocked()) return;
  addVideoEvent();
}

/*
/////////////////////////////
Internal Functions
////////////////////////////
*/

function isVideo() {
  const { currentVideo } = findCurrentVideo();

  return currentVideo;
}

function isVideoUnlocked() {
  const { currentVideo, currentSlide } = findCurrentVideo();

  const viewedVidoesArray = JSON.parse(
    localStorage.getItem("viewedVidoesArray")
  );

  if (viewedVidoesArray.length) {
    for (let i = 0; i < viewedVidoesArray.length; i++) {
      if (
        viewedVidoesArray[i].trim().toLowerCase() ===
        currentSlide.lb.trim().toLowerCase()
      ) {
        currentVideo.unlockElms.forEach((elms) => cp.hide(elms));

        cp.show(getElement("Next", "id"));
        return true;
      }
    }
  }

  return false;
}

// Rests video on slide enter
function videoRest() {
  const { currentVideo } = findCurrentVideo();

  const $video = document.getElementById(currentVideo.video);

  $video.pause();

  currentVideo.videoElmsHideShow.forEach((elmId) => cp.show(elmId));

  cpCmndPause = 1;
  hidePlayPause("Pause");
}

function createVideoStorage() {
  if (!localStorage.getItem("viewedVidoesArray")) {
    localStorage.setItem("viewedVidoesArray", JSON.stringify([]));
  }
}

function addVideoEvent() {
  cpAPIEventEmitter.addEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    checkVideoComplete,
    "cpInfoCurrentFrame"
  );
}

function checkVideoComplete() {
  const { currentVideo } = findCurrentVideo();

  // console.log(cpInfoCurrentFrame, currentVideo.videoEndFrame);

  if (cpInfoCurrentFrame >= currentVideo.videoEndFrame) {
    addVideoToStorage();
    removeVideoEvent();
  }
}

function addVideoToStorage() {
  const { currentSlide } = findCurrentVideo();

  const viewedVidoesArray = JSON.parse(
    localStorage.getItem("viewedVidoesArray")
  );

  if (
    !isValueInArray(viewedVidoesArray, currentSlide.lb.trim().toLowerCase())
  ) {
    updateVideoStorage();
    return;
  }
}

function updateVideoStorage() {
  const { currentSlide } = findCurrentVideo();

  const viewedVidoesArray = JSON.parse(
    localStorage.getItem("viewedVidoesArray")
  );

  const updatedArray = [...viewedVidoesArray, currentSlide.lb];

  localStorage.setItem("viewedVidoesArray", JSON.stringify(updatedArray));
}

function findCurrentVideo() {
  const { currentSlide } = fetchGlobal("slideData");

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

// Hides Nav Play button if video play button is clicked
function videoPlayBtn() {
  const { currentVideo } = findCurrentVideo();

  const $videoPlayBtn = document.getElementById(currentVideo.videoPlayBtn);

  $videoPlayBtn.addEventListener("click", () => {
    hidePlayPause("Play");

    currentVideo.videoElmsHideShow.forEach((elmId) => cp.hide(elmId));

    cpCmndResume = 1;
  });
}

/*
/////////////////////////////
Internal/External Functions
////////////////////////////
*/

export function removeVideoEvent() {
  if (!isVideo) return;

  cpAPIEventEmitter.removeEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    checkVideoComplete,
    "cpInfoCurrentFrame"
  );
}
