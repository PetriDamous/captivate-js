import {
  noTimerSlidesArray,
  durationTimeCss,
  currentTimeCss,
} from "./timerSettings";

import {
  fetchGlobal,
  setGlobalValue,
} from "../../../global/globalObjFunctions";

import { applyStyles } from "../../../utilities/utilities";

import { currentTimeEventEmitter, setDurationTime } from "./timerFunctions";

export function timerInitialize() {
  const $currentTime = createCurrent();
  const $durationTime = createDuration();

  currentTimeEventEmitter($currentTime);
  setDurationTime($durationTime);
}

function createCurrent() {
  const $currentTime = document.createElement("div");

  $currentTime.id = "current-time";

  applyStyles(currentTimeCss, $currentTime);

  document.querySelector("#div_Slide").appendChild($currentTime);

  return $currentTime;
}

function createDuration() {
  const $durationTime = document.createElement("div");

  $durationTime.id = "duration-time";

  applyStyles(durationTimeCss, $durationTime);

  document.querySelector("#div_Slide").appendChild($durationTime);

  return $durationTime;
}
