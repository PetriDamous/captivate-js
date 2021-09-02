/***************************************
  Array of slides to hide progress bar
****************************************/

export const noProgressSlides = [];

/**********************
  Progress Bar Styles
***********************/

export const progressStyles = {
  edgeIeStyles: {
    msTrack: {
      background: "background: transparent;",
      borderColor: "border-color: transparent;",
      color: "color: transparent;",
    },
    msThumb: {
      height: "height: 0px;",
      width: "width: 0px;",
    },
    msFillLower: {
      border: "border: none;",
      background:
        "background: linear-gradient(to bottom, rgba(165,201,86,1) 38%,rgba(205,235,142,1) 76%);",
    },
    msFillUpper: {},
  },
  fireFoxStyles: {
    mozInput: {
      backgroundColor: "background-color: transparent;",
    },
    mozRangeTrack: {
      backgroundColor: "background-color: transparent;",
      border: "border: none;",
    },
    mozRangeThumb: {
      height: "height: 0px;",
      width: "width: 0px;",
      border: "border: none;",
    },
    mozRangeProgress: {
      border: "border: none;",
      background:
        "background: -moz-linear-gradient(-45deg, rgba(165,201,86,1) 22%, rgba(205,235,142,1) 91%);",
      height: "height: 5px",
    },
  },
  chromeStyles: {
    inputRngI: {
      appearance: "-webkit-appearance: none;",
      color: "color: transparent;",
      cursor: "cursor: default;",
      padding: "padding: initial;",
      border: "border: none;",
      margin: "margin: 2px;",
    },
    inputRng: {
      overflow: "overflow: hidden;",
      appearance: "-webkit-appearance: none;",
      border: "border: none;",
    },
    runTrack: {
      height: "height: 5px;",
      appearance: "-webkit-appearance: none;",
      border: "border: none;",
    },
    slideThumb: {
      width: "width: 0px;",
      appearance: "-webkit-appearance: none;",
      boxShadow: "box-shadow: -800px 0 0 800px #c0e07b;",
    },
    inputFcs: {
      outline: "outline: none;",
    },
  },
};

/************************
  Progress Bar Position
*************************/

export const progressPos = [
  ["position", "absolute"],
  ["top", null],
  ["right", null],
  ["bottom", "6%"],
  ["left", null],
  ["margin-top", null],
  ["margin-right", null],
  ["margin-bottom", null],
  ["margin-left", null],
  ["padding-top", null],
  ["padding-right", null],
  ["padding-bottom", null],
  ["padding-left", null],
  ["width", "100%"],
  ["height", "5px"],
  ["z-index", "1200"],
];

export const progressPosIE = [
  ["position", "absolute"],
  ["top", null],
  ["right", null],
  ["bottom", "6%"],
  ["left", null],
  ["margin-top", null],
  ["margin-right", null],
  ["margin-bottom", null],
  ["margin-left", null],
  ["padding-top", "0px"],
  ["padding-right", null],
  ["padding-bottom", "0px"],
  ["padding-left", null],
  ["width", "100%"],
  ["height", null],
  ["z-index", "1200"],
];
