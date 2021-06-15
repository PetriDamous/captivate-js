import { applyStyles } from "../../utility";
import { fetchGlobal } from "../../global/global";

function hideProgress() {
  var noProgressSlides = ["Welcome"];

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

  var styles;

  if (isIE || isEdge) {
    var edgeIE = {
      ms_track: [
        "#seekerBar::-ms-track {",
        // Change styles below //

        "background: transparent;",
        "border-color: transparent;",
        "color: transparent;",

        // Change styles above //
        "}",
      ].join(""),
      ms_thumb: [
        "#seekerBar::-ms-thumb {",
        // Change styles below //

        "height: 0px;",
        "width: 0px;",

        // Change styles above //
        "}",
      ].join(""),
      ms_fill_lower: [
        "#seekerBar::-ms-fill-lower {",
        // Change styles below //

        "border: none;",
        "background: linear-gradient(to bottom, rgba(165,201,86,1) 38%,rgba(205,235,142,1) 76%);",

        // Change styles above //
        "}",
      ].join(""),
      ms_fill_upper: [
        "#seekerBar::-ms-fill-upper {",
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
        "#seekerBar {",
        // Change styles below //

        "background-color: transparent;",

        // Change styles above //
        "}",
      ].join(""),
      moz_range_track: [
        "#seekerBar::-moz-range-track {",
        // Change styles below //

        "background-color: transparent;",
        "border: none;",

        // Change styles above //
        "}",
      ].join(""),
      moz_range_thumb: [
        "#seekerBar::-moz-range-thumb {",
        // Change styles below //

        "height: 0px;",
        "width: 0px;",
        "border: none;",

        // Change styles above //
        "}",
      ].join(""),
      moz_range_progress: [
        "#seekerBar::-moz-range-progress {",
        // Change styles below //

        "border: none;",
        "background: -moz-linear-gradient(-45deg, rgba(165,201,86,1) 22%, rgba(205,235,142,1) 91%);",

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
      inputRngI: [
        'input[type="range" i]  {',
        // Change styles below //

        "-webkit-appearance: none;",
        "color: transparent;",
        "cursor: default;",
        "padding: initial;",
        "border: none;",
        "margin: 2px;",

        // Change styles above //
        "}",
      ].join(""),

      inputRng: [
        'input[type="range"] {',
        // Change styles below //

        "overflow: hidden;",
        "-webkit-appearance: none;",
        "border: none;",

        // Change styles above //
        "}",
      ].join(""),
      runTrack: [
        'input[type="range"]::-webkit-slider-runnable-track {',
        // Change styles below //

        "height: 5px;",
        "-webkit-appearance: none;",
        "border: none;",

        // Change styles above //
        "}",
      ].join(""),
      slideThumb: [
        'input[type="range"]::-webkit-slider-thumb {',

        // Change styles below //

        "width: 0px;",
        "-webkit-appearance: none;",
        "box-shadow: -800px 0 0 800px #c0e07b;",

        // Change styles above //
        "}",
      ].join(""),
      inputFcs: [
        'input[type="range"]:focus {',

        // Change styles below //

        "outline: none;",

        // Change styles above //
        "}",
      ].join(""),
    };

    styles =
      chrome.inputRngI +
      chrome.inputRng +
      chrome.runTrack +
      chrome.slideThumb +
      chrome.inputFcs;
  }

  // Progress Bar style
  var $styleElm = document.createElement("style");
  document.head.appendChild($styleElm);
  $styleElm.innerHTML = styles;

  // Positions Progress Bar
  var progressPos = [
    ["position", "absolute"],
    ["top", "87%"],
    ["left", "6%"],
    ["width", "1123px"],
    ["z-index", "1200"],
    ["height", "5px"],
  ];

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
