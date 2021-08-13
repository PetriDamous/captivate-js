import {
  noTimerSlidesArray,
  durationTimeCss,
  currentTimeCss,
} from "./timerSettings";

import { applyStyles } from "../../../utilities/utilities";

import { setCurrentTime, setDurationTime } from "./timerFunctions";

export function timerInitialize() {
  const $durationTime = createDuration();

  createCurrent();

  currentTimeEvent();

  setDurationTime($durationTime);
}

function hideTimer() {
  var slideLabel = cpInfoCurrentSlideLabel.slice(0, 14);

  isTimer = slideLabel !== "Learning Check" || slideAudioName;
}

function setTimer() {}

/**************************
  Create Timer Elements
**************************/

function createCombined() {}

function createCurrent() {
  const $currentTime = document.createElement("span");

  $currentTime.id = "current-time";

  applyStyles(currentTimeCss, $currentTime);

  document.querySelector("#div_Slide").appendChild($currentTime);

  return $currentTime;
}

function createDuration() {
  const $durationTime = document.createElement("span");

  $durationTime.id = "duration-time";

  applyStyles(durationTimeCss, $durationTime);

  document.querySelector("#div_Slide").appendChild($durationTime);

  return $durationTime;
}

/*******************
  Event Functions
********************/

function startTimer() {
  const $currentTime = document.getElementById("current-time");

  setCurrentTime($currentTime);
}

/*******************
  Event Listners
********************/

function currentTimeEvent() {
  cpAPIEventEmitter.addEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    startTimer,
    "cpInfoCurrentFrame"
  );
}

export function removeCurrentTimeEvent() {
  cpAPIEventEmitter.removeEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    startTimer,
    "cpInfoCurrentFrame"
  );
}
