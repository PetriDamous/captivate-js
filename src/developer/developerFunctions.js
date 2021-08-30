import { fetchGlobal } from "../global/globalObjFunctions";

/****************************
    Key Press events go here
****************************/

export function keyPress(e) {
  frameSkip(e);
  slideSkip(e);
}

/****************************
    Skipping functions
****************************/

function frameSkip(e) {
  if (e.keyCode !== 39 && e.keyCode !== 37) return;

  const {
    frameSkip: { framesRewind, framesForward },
  } = fetchGlobal("developerMode");

  // Fast Forward
  if (e.keyCode === 39) {
    cpCmndGotoFrameAndResume = cpInfoCurrentFrame + framesForward;
  }

  // Rewind
  if (e.keyCode === 37) {
    cpCmndGotoFrameAndResume = cpInfoCurrentFrame - framesRewind;
  }
}

function slideSkip(e) {
  if (e.keyCode !== 38 && e.keyCode !== 40) return;

  // Next Slide
  if (e.keyCode === 38) {
    cpCmndNext = true;
  }

  // Previous Slide
  if (e.keyCode === 40) {
    cpCmndPrevious = true;
  }
}
