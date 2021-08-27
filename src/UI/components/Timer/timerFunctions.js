import { fetchGlobal } from "../../../global/globalObjFunctions";
import { noTimerSlidesArray } from "./timerSettings";
import {
  currentTimePos,
  durationTimePos,
  timerSettingObj,
} from "./timerSettings";
import { createCombined, createCurrent, createDuration } from "./timerDOM";

/*************************
  Timer Global Variables
**************************/
const secondsInHour = 3600;
const secondsInMinutes = 60;

/*******************
  Hide Timer
********************/

export function hideTimer() {
  let isTimerHide = false;

  for (let i = 0; i < noTimerSlidesArray.length; i++) {
    if (
      noTimerSlidesArray[i].trim().toLowerCase() ===
      cpInfoCurrentSlideLabel.trim().toLowerCase()
    ) {
      isTimerHide = true;
      break;
    }
  }

  return isTimerHide;
}

/**************************
  Type of timer to use
***************************/

export function setTimer() {
  const { isCombined, isCurrentOn, isDurationOn } = timerSettingObj;

  if (isCombined) {
    createCombined();
    return;
  }

  if (isCurrentOn) {
    const $currentTime = createCurrent();
    applyStyles(currentTimePos, $currentTime);
    currentTimeEvent();
  }

  if (isDurationOn) {
    const $durationTime = createDuration();
    applyStyles(durationTimePos, $durationTime);
    setDurationTime($durationTime);
  }
}

/*******************
  Duration Time
********************/

export function setDurationTime($durationTime) {
  let { durationHrs, durationMin, durationSec, durationSeconds } =
    getDurationTime();

  durationHrs = "0" + durationHrs;
  durationMin = "0" + durationMin;
  durationSec = "0" + durationSec;

  // Takes out extra zero when counter hits 10
  if (durationHrs.length >= 3) {
    durationHrs = durationHrs.slice(1);
  }

  if (durationMin.length >= 3) {
    durationMin = durationMin.slice(1);
  }

  if (durationSec.length >= 3) {
    durationSec = durationSec.slice(1);
  }

  // Include hour if slide duration is an hour+
  if (durationSeconds >= secondsInHour) {
    $durationTime.textContent = `${durationHrs}:${durationMin}:${durationSec}`;

    return;
  }

  $durationTime.textContent = `${durationMin}:${durationSec}`;
}

function getDurationTime() {
  const {
    currentSlide: { from: firstFrame, to: lastFrame },
  } = fetchGlobal("slideData");

  let durationFrames = lastFrame - firstFrame;
  let durationFps = cpInfoFPS;
  let durationSeconds = durationFrames / durationFps;

  /*hour*/

  const durationHrs = Math.floor(durationSeconds / secondsInHour).toFixed(0);

  /*minutes*/

  const durationMin = Math.floor(
    (durationSeconds / secondsInHour -
      Math.floor(durationSeconds / secondsInHour).toFixed(0)) *
      secondsInMinutes
  ).toFixed(0);

  /*seconds*/

  const durationSec = (
    ((durationSeconds / secondsInHour -
      Math.floor(durationSeconds / secondsInHour)) *
      secondsInMinutes -
      Math.floor(
        (durationSeconds / secondsInHour -
          Math.floor(durationSeconds / secondsInHour)) *
          secondsInMinutes
      )) *
    secondsInMinutes
  ).toFixed(0);

  return {
    durationHrs,
    durationMin,
    durationSec,
    durationSeconds,
  };
}

/*******************
  Current Time
********************/

export function setCurrentTime($currentTime) {
  let { currentHrs, currentMin, currentSec, currentSeconds } = getCurrentTime();

  const leadingZeroSixity = "060";

  currentHrs = "0" + currentHrs;
  currentMin = "0" + currentMin;
  currentSec = "0" + currentSec;

  // Takes out 60 on change
  if (currentMin === leadingZeroSixity) {
    currentHrs = "0" + (+currentHrs + 1).toString();
    currentMin = "00";
  }

  if (currentSec === leadingZeroSixity) {
    currentMin = "0" + (+currentMin + 1).toString();
    currentSec = "00";
  }

  // Takes out extra zero when counter hits 10
  if (currentHrs.length >= 3) {
    currentHrs = currentHrs.slice(1);
  }

  if (currentMin.length >= 3) {
    currentMin = currentMin.slice(1);
  }

  if (currentSec.length >= 3) {
    currentSec = currentSec.slice(1);
  }

  // Include hour if slide duration is an hour+
  if (currentSeconds >= secondsInHour) {
    $currentTime.textContent = `${currentHrs}:${currentMin}:${currentSec}`;

    return;
  }

  $currentTime.textContent = `${currentMin}:${currentSec}`;
}

function getCurrentTime() {
  const {
    currentSlide: { from: firstFrame },
  } = fetchGlobal("slideData");

  const fps = cpInfoFPS;
  const numOfFrm = cpInfoCurrentFrame - firstFrame;

  const currentSeconds = numOfFrm / fps;

  /*hour*/

  const currentHrs = Math.floor(currentSeconds / secondsInHour).toFixed(0);

  /*minutes*/

  const currentMin = Math.floor(
    (currentSeconds / secondsInHour -
      Math.floor(currentSeconds / secondsInHour).toFixed(0)) *
      secondsInMinutes
  ).toFixed(0);

  /*seconds*/

  const currentSec = (
    ((currentSeconds / secondsInHour -
      Math.floor(currentSeconds / secondsInHour)) *
      secondsInMinutes -
      Math.floor(
        (currentSeconds / secondsInHour -
          Math.floor(currentSeconds / secondsInHour)) *
          secondsInMinutes
      )) *
    secondsInMinutes
  ).toFixed(0);

  return {
    currentHrs,
    currentMin,
    currentSec,
    currentSeconds,
  };
}

/*******************
  Event Functions
********************/

export function startTimer() {
  const $currentTime = document.getElementById("current-time");

  setCurrentTime($currentTime);
}
