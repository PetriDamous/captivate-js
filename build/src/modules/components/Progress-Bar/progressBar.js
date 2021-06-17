import { applyStyles } from "../../utility";
import { fetchGlobal } from "../../global/global";
import {
  progressPos,
  progressStyles,
  noProgressSlides,
} from "./progressBarSettings";

function hideProgress() {
  var isProgressHide = false;

  for (var i = 0; i < noProgressSlides.length; i++) {
    if (noProgressSlides[i] === fetchGlobal("slideLabel")) {
      isProgressHide = true;
      break;
    }
  }

  return isProgressHide;
}

export function initializeProgressBar() {
  if (hideProgress()) return;

  var $progressBar = createProgressBar();
  progressStyle($progressBar);
  progressEventEmitter($progressBar);
}

export function createProgressBar() {
  var firstFrame = fetchGlobal("firstFrame");
  var lastFrame = fetchGlobal("lastFrame");

  // Creates Progress Bar
  var $progressBar = document.createElement("input");

  $progressBar.id = "progressBar";
  $progressBar.type = "range";
  $progressBar.value = "0";
  $progressBar.step = "1";
  $progressBar.min = firstFrame;
  $progressBar.max = lastFrame;

  // Places Progress Bar on slide
  document.querySelector("#div_Slide").append($progressBar);

  // Disables playBar Control
  $progressBar.disabled = true;

  return $progressBar;
}

// Progress Bar styles
function progressStyle($progressBar) {
  var isIE = fetchGlobal("isIE");
  var isEdge = fetchGlobal("isEdge");
  var isChrome = fetchGlobal("isChrome");
  var isFirefox = fetchGlobal("isFirefox");

  const { edgeIeStyles, fireFoxStyles, chromeStyles } = progressStyles;

  const { msTrack, msThumb, msFillLower } = edgeIeStyles;

  const { mozInput, mozRangeTrack, mozRangeThumb, mozRangeProgress } =
    fireFoxStyles;

  const { inputRngI, inputRng, runTrack, slideThumb, inputFcs } = chromeStyles;

  var styles;

  if (isIE || isEdge) {
    var edgeIE = {
      ms_track: [
        "#progressBar::-ms-track {",
        // Change styles below //

        msTrack.background,
        msTrack.borderColor,
        msTrack.color,

        // Change styles above //
        "}",
      ].join(""),
      ms_thumb: [
        "#progressBar::-ms-thumb {",
        // Change styles below //

        msThumb.height,
        msThumb.width,

        // Change styles above //
        "}",
      ].join(""),
      ms_fill_lower: [
        "#progressBar::-ms-fill-lower {",
        // Change styles below //

        msFillLower.border,
        msFillLower.background,

        // Change styles above //
        "}",
      ].join(""),
      ms_fill_upper: [
        "#progressBar::-ms-fill-upper {",
        // Change styles below //

        // Change styles above //
        "}",
      ].join(""),
    };
    styles = edgeIE.ms_track + edgeIE.ms_thumb + edgeIE.ms_fill_lower;
  }
  if (isFirefox) {
    var fireFox = {
      moz_input: [
        "#progressBar {",
        // Change styles below //

        mozInput.backgroundColor,

        // Change styles above //
        "}",
      ].join(""),
      moz_range_track: [
        "#progressBar::-moz-range-track {",
        // Change styles below //

        mozRangeTrack.backgroundColor,
        mozRangeTrack.border,

        // Change styles above //
        "}",
      ].join(""),
      moz_range_thumb: [
        "#progressBar::-moz-range-thumb {",
        // Change styles below //

        mozRangeThumb.height,
        mozRangeThumb.width,
        mozRangeThumb.border,

        // Change styles above //
        "}",
      ].join(""),
      moz_range_progress: [
        "#progressBar::-moz-range-progress {",
        // Change styles below //

        mozRangeProgress.border,
        mozRangeProgress.background,
        mozRangeProgress.height,

        // Change styles above //
        "}",
      ].join(""),
    };

    styles =
      fireFox.moz_input +
      fireFox.moz_range_track +
      fireFox.moz_range_thumb +
      fireFox.moz_range_progress;
  }
  if (isChrome) {
    var chrome = {
      input_rng_i: [
        'input[type="range" i]  {',
        // Change styles below //

        inputRngI.appearance,
        inputRngI.color,
        inputRngI.cursor,
        inputRngI.padding,
        inputRngI.border,
        inputRngI.margin,

        // Change styles above //
        "}",
      ].join(""),

      input_rng: [
        'input[type="range"] {',
        // Change styles below //

        inputRng.overflow,
        inputRng.appearance,
        inputRng.border,

        // Change styles above //
        "}",
      ].join(""),
      run_track: [
        'input[type="range"]::-webkit-slider-runnable-track {',
        // Change styles below //

        runTrack.height,
        ,
        runTrack.appearance,
        runTrack.border,

        // Change styles above //
        "}",
      ].join(""),
      slide_thumb: [
        'input[type="range"]::-webkit-slider-thumb {',

        // Change styles below //

        slideThumb.width,
        slideThumb.appearance,
        slideThumb.boxShadow,

        // Change styles above //
        "}",
      ].join(""),
      input_fcs: [
        'input[type="range"]:focus {',

        // Change styles below //

        inputFcs.outline,

        // Change styles above //
        "}",
      ].join(""),
    };

    styles =
      chrome.input_rng_i +
      chrome.input_rng +
      chrome.run_track +
      chrome.slide_thumb +
      chrome.input_fcs;
  }

  // Progress Bar style
  var $styleElm = document.createElement("style");
  document.head.appendChild($styleElm);
  $styleElm.innerHTML = styles;

  applyStyles(progressPos, $progressBar);
}

function progressEventEmitter($progressBar) {
  cpAPIEventEmitter.addEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    function () {
      progressUpdate($progressBar);
    },
    "cpInfoCurrentFrame"
  );
}

function progressUpdate($progressBar) {
  $progressBar.valueAsNumber = cpInfoCurrentFrame;
}
