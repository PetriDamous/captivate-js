import { hidePlayPause, getElement } from "../globalButton";
import { currentSlide } from "../../../index";
import { isValueInArray } from "../../utility";

// Hides Nav Play button if video play button is clicked
export function videoPlayBtn() {
  var videoSlideLabels = ["Intro Video"];
  var videoPlayBtnList = ["SmartShape_114"];

  var isVideo = videoSlideLabels.some(function (videoSlide) {
    return cpInfoCurrentSlideLabel.indexOf(videoSlide) !== -1;
  });

  if (isVideo) {
    for (var i = 0; i < videoPlayBtnList.length; i++) {
      if (cpInfoCurrentSlideLabel.indexOf(videoSlideLabels[i]) !== -1) {
        var $videoBtn = document.getElementById(videoPlayBtnList[i]);

        $videoBtn.addEventListener("click", function () {
          hidePlayPause("Play");
        });
        break;
      }
    }
  }
}

// Allows nav bar play button to play video on slides
// Place inside of play button
export function playVideo() {
  var videoSlideLabels = ["Intro Video"];
  var videoElmsHide = ["SmartShape_114", "Image_372", "Image_371", "Image_370"];

  var isVideo = videoSlideLabels.some(function (videoSlide) {
    return cpInfoCurrentSlideLabel.indexOf(videoSlide) !== -1;
  });

  if (isVideo) {
    videoElmsHide.forEach(function (elmId) {
      cp.hide(elmId);
    });
  }
}

// Rests video on slide enter
export function videoRest() {
  var videoSlideLabels = ["Intro Video"];
  var videoList = ["slidevid0"];
  var videoElmsShow = ["SmartShape_114", "Image_372", "Image_371", "Image_370"];
  var video;

  var isVideo = videoSlideLabels.some(function (videoSlide) {
    return cpInfoCurrentSlideLabel.indexOf(videoSlide) !== -1;
  });

  if (isVideo) {
    for (var i = 0; i < videoList.length; i++) {
      if (cpInfoCurrentSlideLabel.indexOf(videoSlideLabels[i]) !== -1) {
        video = document.getElementById(videoList[i]);
        break;
      }
    }

    video.pause();

    videoElmsShow.forEach(function (elmId) {
      cp.show(elmId);
    });

    cpCmndPause = 1;
    hidePlayPause("Pause");
  }
}

export function videoUnlock(videoEndFrame) {
  var unlockElms = ["Btn_Nxt1_hide_q4_241"];
  if (!localStorage.getItem("viewedVidoes")) {
    localStorage.setItem("viewedVidoes", JSON.stringify([]));
  }

  cp.hide(getElement("Next", "id"));

  if (
    JSON.parse(localStorage.getItem("viewedVidoes")).some(
      (elm) => currentSlide.lb === elm
    )
  ) {
    unlockElms.forEach(function (elms) {
      cp.hide(elms);
    });

    cp.show(getElement("Next", "id"));
    return;
  }

  cpAPIEventEmitter.addEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    function () {
      if (cpInfoCurrentFrame === videoEndFrame) {
        var viewedVidoes = JSON.parse(localStorage.getItem("viewedVidoes"));

        if (!isValueInArray(viewedVidoes, currentSlide.lb)) {
          viewedVidoes.push(currentSlide.lb);
          localStorage.setItem("viewedVidoes", JSON.stringify(viewedVidoes));
        }

        cp.show(getElement("Next", "id"));
      }
    },
    "cpInfoCurrentFrame"
  );
}

export function videoCompletion() {
  var projectVideos = [
    {
      videoLabel: "SlideVideo_8",
      videoEnd: 10729,
    },
  ];
  console.log(currentSlide);
  projectVideos.forEach(function (elm) {
    if (currentSlide.videos && currentSlide.videos[0] === elm.videoLabel) {
      videoUnlock(elm.videoEnd);
    }
  });
}
