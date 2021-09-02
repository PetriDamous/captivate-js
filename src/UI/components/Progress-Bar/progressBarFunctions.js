import {
  progressPos,
  progressPosIE,
  progressStyles,
  noProgressSlides,
} from "./progressBarSettings";
import { applyStyles } from "../../../utilities/utilities";
import { addCssRules } from "../../css/styles";

/*******************************
  Hides Progress Bar
*******************************/

export function hideProgress() {
  let isProgressHide = false;

  for (let i = 0; i < noProgressSlides.length; i++) {
    if (
      noProgressSlides[i].trim().toLowerCase() ===
      cpInfoCurrentSlideLabel.trim().toLowerCase()
    ) {
      isProgressHide = true;
      break;
    }
  }

  return isProgressHide;
}

/*******************************
  Applies Progress Bar styles
*******************************/

export function progressStyle($progressBar) {
  const {
    browserType: { isIE, isEdge, isChrome, isFirefox },
  } = window.cpGlobalObj;

  const { edgeIeStyles, fireFoxStyles, chromeStyles } = progressStyles;

  const { msTrack, msThumb, msFillLower } = edgeIeStyles;

  const { mozInput, mozRangeTrack, mozRangeThumb, mozRangeProgress } =
    fireFoxStyles;

  const { inputRngI, inputRng, runTrack, slideThumb, inputFcs } = chromeStyles;

  let styles;

  if (isIE || isEdge) {
    const edgeIE = {
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
    const fireFox = {
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
    const chrome = {
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

  addCssRules(styles);

  if (isIE) {
    applyStyles(progressPosIE, $progressBar);
  } else {
    applyStyles(progressPos, $progressBar);
  }
}

/**********************************
  Event functions
**********************************/

export function progressBarStart() {
  const $progressBar = document.getElementById("progressBar");

  progressUpdate($progressBar);
}

function progressUpdate($progressBar) {
  $progressBar.valueAsNumber = cpInfoCurrentFrame;
}
