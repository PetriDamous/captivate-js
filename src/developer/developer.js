export function developerMode(isOn) {
  if (isOn) {
    document.addEventListener("keydown", frameSkip);
  }
}

// 39 ->
// 37 <-

function frameSkip(e) {
  const framesRewind = 90;
  const framesFastForward = 600;

  if (e.keyCode === 39) {
    cpCmndGotoFrameAndResume = cpInfoCurrentFrame + framesFastForward;
  }

  if (e.keyCode === 37) {
    cpCmndGotoFrameAndResume = cpInfoCurrentFrame - framesRewind;
  }
}
