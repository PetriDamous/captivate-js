import {
  noTimerSlidesArray,
  durationTimeCss,
  currentTimeCss,
  currentTimePos,
  durationTimePos,
  combinedTimePos,
  dividerCss,
  timerSettingObj,
} from "./timerSettings";

import { applyStyles } from "../../../utilities/utilities";

import { setCurrentTime, setDurationTime } from "./timerFunctions";

export function timerInitialize() {
  setTimer();
}

function hideTimer() {
  var slideLabel = cpInfoCurrentSlideLabel.slice(0, 14);

  isTimer = slideLabel !== "Learning Check" || slideAudioName;
}

function setTimer() {
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

/**************************
  Create Timer Elements
**************************/

function createCombined() {
  const $currentTime = createCurrent();
  const $durationTime = createDuration();

  const $combinedTime = document.createElement("div");
  $combinedTime.id = "combinded-time";
  document.querySelector("#div_Slide").appendChild($combinedTime);

  const $timeDivider = document.createElement("span");
  $timeDivider.textContent = "/";
  applyStyles(dividerCss, $timeDivider);

  const timeElmArray = [$currentTime, $timeDivider, $durationTime];
  timeElmArray.forEach((elm) => $combinedTime.appendChild(elm));

  applyStyles(combinedTimePos, $combinedTime);

  setCurrentTime($currentTime);
  setDurationTime($durationTime);

  currentTimeEvent();
}

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
