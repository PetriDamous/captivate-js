import { fetchGlobal, setGlobalValue } from "../global/global";
import { ccBoxOnEnter_manuel } from "../components/Close-Caption/closeCaption-manuel";
import { ccBoxOnEnter_auto } from "../controls/Close-Caption/closeCaption-auto";
import { ProgressBarInitialize } from "../components/Progress-Bar/progressBar";
import { slideRest } from "../controls/globalButton";
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

  // Setsup

  var isIE = fetchGlobal("isIE");

  var toolTipArray = [
    "Menu",
    "Glossary",
    "Referneces",
    "Exit",
    "Play",
    "Pause",
    "Previous",
    "Next",
    "Rewind",
  ];

  toolTipArray.forEach(function (elm) {
    var setDataAttr = setDataButton(elm);

    setDataAttr.attr("data-button", elm);
    setDataAttr.attr("title", elm);
    setDataAttr.css("cursor", "pointer");
  });

  // Extra Elements
  var extraElementArray = ["Closed Caption", "Next_hide"];

  extraElementArray.forEach(function (elm) {
    var setDataAttr = setDataButton(elm);
    setDataAttr.attr("data-button", elm);
  });

  // Finds Element to set attributes on
  function setDataButton(elm) {
    var setDataAttr;

    if (isIE) {
      console.log(isIE);
      setDataAttr = $("p:contains(" + elm + ")")
        .parent()
        .parent();
    } else {
      setDataAttr = $('div[aria-label="' + elm + " " + '"]');
    }

    setDataAttr.attr("data-button", elm);
    return setDataAttr;
  }

  slideRest();
  // ccToolTip_auto();
  // ccBoxOnEnter_auto();
  ccBoxOnEnter_manuel();
  ProgressBarInitialize();
  videoInitialize();
}
