import {
  durationTimeCss,
  currentTimeCss,
  combinedTimePos,
  dividerCss,
} from "./timerSettings";

import { applyStyles } from "../../../utilities/utilities";

import {
  setCurrentTime,
  setDurationTime,
  startTimer,
  hideTimer,
  setTimer,
} from "./timerFunctions";

/*********************
  Initialize Timer
**********************/

export function timerInitialize() {
  if (hideTimer()) return;

  setTimer();
}

/**************************
  Create Timer Elements
**************************/

export function createCombined() {
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

  addCurrentTimeEvent();
}

export function createCurrent() {
  const $currentTime = document.createElement("span");

  $currentTime.id = "current-time";

  applyStyles(currentTimeCss, $currentTime);

  document.querySelector("#div_Slide").appendChild($currentTime);

  return $currentTime;
}

export function createDuration() {
  const $durationTime = document.createElement("span");

  $durationTime.id = "duration-time";

  applyStyles(durationTimeCss, $durationTime);

  document.querySelector("#div_Slide").appendChild($durationTime);

  return $durationTime;
}

/*******************
  Event Listners
********************/

function addCurrentTimeEvent() {
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
