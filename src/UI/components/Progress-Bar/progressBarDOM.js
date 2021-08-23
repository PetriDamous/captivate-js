import { fetchGlobal } from "../../../global/globalObjFunctions";

import {
  progressStyle,
  progressBarStart,
  hideProgress,
} from "./progressBarFunctions";

/****************************
  Initializes Progress Bar
*****************************/

export function ProgressBarInitialize() {
  if (hideProgress()) return;

  const $progressBar = createProgressBar();
  progressStyle($progressBar);
  addProgressBarEvent();
}

/************************
  Creates Progress Bar 
*************************/

export function createProgressBar() {
  const {
    currentSlide: { from: firstFrame, to: lastFrame },
  } = fetchGlobal("slideData");

  const $progressBar = document.createElement("input");

  $progressBar.id = "progressBar";
  $progressBar.type = "range";
  $progressBar.value = "0";
  $progressBar.step = "1";
  $progressBar.min = firstFrame;
  $progressBar.max = lastFrame;

  document.querySelector("#div_Slide").appendChild($progressBar);

  $progressBar.disabled = true;

  return $progressBar;
}

/********************
  Event Listeners
*********************/

function addProgressBarEvent() {
  cpAPIEventEmitter.addEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    progressBarStart,
    "cpInfoCurrentFrame"
  );
}

export function removeProgressBarEvent() {
  cpAPIEventEmitter.removeEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    progressBarStart,
    "cpInfoCurrentFrame"
  );
}
