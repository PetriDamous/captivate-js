/******************
 Play
*******************/

export function play(value) {
  cpCmndPlay = value;
}

/******************
 Resume
*******************/

export function resumeAndPlay(value) {
  cpCmndGotoFrameAndResume = value;
}

export function resume(value) {
  cpCmndResume = value;
}

/******************
 Pause
*******************/

export function pause(value) {
  cpCmndPause = value;
}

/******************
 Frame
*******************/

export function gotoFrame(value) {
  cpCmndGotoFrame = value;
}

/******************
 TOC
*******************/

export function openCloseToc(value) {
  cpCmndTOCVisible = value;
}
