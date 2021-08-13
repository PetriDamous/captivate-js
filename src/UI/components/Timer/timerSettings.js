export const noTimerSlidesArray = [];

// 1. Combine currentTime/durationTime (wrap in parent div)
// a. Both timers are automatically on
// b. Both timers are combined like youtube
// c. Has own positioning array
// d. Uses both currentTimeCss and durationTimeCss arrays
// e. create combine time function

// 2. turn off/on currentTime
// a. Has own positioning array
// b. Uses currentTimeCss

// 3. turn off/on durationTime
// a. Has own positioning array
// b. Uses durationTimeCss

export const timerSettingObj = {
  isCombined: true,
  isCurrentOn: false,
  isDurationOn: false,
};

export const currentTimeCss = [
  ["position", "absolute"],
  ["top", "95%"],
  ["right", null],
  ["bottom", null],
  ["left", "9%"],
  ["margin-top", null],
  ["margin-right", null],
  ["margin-bottom", null],
  ["margin-left", null],
  ["padding-top", null],
  ["padding-right", null],
  ["padding-bottom", null],
  ["padding-left", null],
  ["color", "white"],
  ["font-weight", "inherit"],
  ["font-family", "inherit"],
  ["font-size", "inherit"],
  ["z-index", 2000],
];

export const durationTimeCss = [
  ["position", "absolute"],
  ["top", "95%"],
  ["right", null],
  ["bottom", null],
  ["left", "85%"],
  ["margin-top", null],
  ["margin-right", null],
  ["margin-bottom", null],
  ["margin-left", null],
  ["padding-top", null],
  ["padding-right", null],
  ["padding-bottom", null],
  ["padding-left", null],
  ["color", "white"],
  ["font-weight", "inherit"],
  ["font-family", "inherit"],
  ["font-size", "inherit"],
  ["z-index", 2000],
];

export const currentTimePos = [];

export const durationTimePos = [];
