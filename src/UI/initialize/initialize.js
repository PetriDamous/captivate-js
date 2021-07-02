import { fetchGlobal, setGlobalValue } from "../../global/globalSettings";
import { setToolTips } from "../data-buttons/toolTips";
import { setExtraDataBtn } from "../data-buttons/extraDataBtns";
import { ccBoxOnEnter_manuel } from "../components/Close-Caption/closeCaption-manuel";
import { ccBoxOnEnter_auto } from "../controls/Close-Caption/closeCaption-auto";
import { ProgressBarInitialize } from "../components/Progress-Bar/progressBar";
import { slideRest } from "../uiFunctions";
import { videoInitialize } from "../controls/Video/video";

export function initialize() {
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

  setToolTips();
  setExtraDataBtn();

  slideRest();
  // ccToolTip_auto();
  // ccBoxOnEnter_auto();
  ccBoxOnEnter_manuel();
  ProgressBarInitialize();
  videoInitialize();
}
