import {
  fetchGlobal,
  setGlobalValue,
} from "../../../global/globalObjFunctions";

function hideTimer() {
  var slideLabel = cpInfoCurrentSlideLabel.slice(0, 14);

  isTimer = slideLabel !== "Learning Check" || slideAudioName;
}

export function currentTimeEventEmitter($currentTime) {
  cpAPIEventEmitter.addEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    () => setCurrentTime($currentTime),
    "cpInfoCurrentFrame"
  );
}

export function removeCurrentTimeEmitter() {
  cpAPIEventEmitter.removeEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    checkVideoComplete,
    "cpInfoCurrentFrame"
  );
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
  if (durationHrs.length === 3) {
    durationHrs = durationHrs.slice(1);
  }

  if (durationMin.length === 3) {
    durationMin = durationMin.slice(1);
  }

  if (durationSec.length === 3) {
    durationSec = durationSec.slice(1);
  }

  // Include hour if slide duration is an hour
  if (durationSeconds >= 3600) {
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

  const durationHrs = Math.floor(durationSeconds / 3600).toFixed(0);

  /*minutes*/

  const durationMin = Math.floor(
    (durationSeconds / 3600 - Math.floor(durationSeconds / 3600).toFixed(0)) *
      60
  ).toFixed(0);

  /*seconds*/

  const durationSec = (
    ((durationSeconds / 3600 - Math.floor(durationSeconds / 3600)) * 60 -
      Math.floor(
        (durationSeconds / 3600 - Math.floor(durationSeconds / 3600)) * 60
      )) *
    60
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

  currentHrs = "0" + currentHrs;
  currentMin = "0" + currentMin;
  currentSec = "0" + currentSec;

  // Takes out extra zero when counter hits 10
  if (currentHrs.length === 3) {
    currentHrs = currentHrs.slice(1);
  }

  if (currentMin.length === 3) {
    console.log(currentMin.length);
    currentMin = currentMin.slice(1);
  }

  if (currentSec.length === 3) {
    currentSec = currentSec.slice(1);
  }

  // Takes out 60 on change
  if (currentMin === "60") {
    currentHrs = "0" + (+currentMin + 1).toString();
    currentMin = "00";
  }

  if (currentSec === "60") {
    currentMin = "0" + (+currentMin + 1).toString();
    currentSec = "00";
  }

  // Include hour if slide duration is an hour
  if (currentSeconds >= 3600) {
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

  const currentHrs = Math.floor(currentSeconds / 3600).toFixed(0);

  /*minutes*/

  const currentMin = Math.floor(
    (currentSeconds / 3600 - Math.floor(currentSeconds / 3600).toFixed(0)) * 60
  ).toFixed(0);

  /*seconds*/

  const currentSec = (
    ((currentSeconds / 3600 - Math.floor(currentSeconds / 3600)) * 60 -
      Math.floor(
        (currentSeconds / 3600 - Math.floor(currentSeconds / 3600)) * 60
      )) *
    60
  ).toFixed(0);

  return {
    currentHrs,
    currentMin,
    currentSec,
    currentSeconds,
  };
}
