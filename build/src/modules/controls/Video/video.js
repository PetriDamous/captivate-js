import { hidePlayPause } from "../globalButton";

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
        var videoBtn = document.getElementById(videoPlayBtnList[i]);

        videoBtn.addEventListener("click", function () {
          hidePlayPause("Play");
        });
        break;
      }
    }
  }
}

// Custom play function for WQP
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
