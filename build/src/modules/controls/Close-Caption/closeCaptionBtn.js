import { getButtonsList } from "../globalButton";
import { currentSlide, lastFrame, firstFrame } from "../../../index";

// CC button Captivate 9
export function ccFunc() {
  if (cpCmndCC === 0) {
    window.ccOpen = true;
    cpCmndCC = 1;
    cp.hide("ccClose");
    ccToolTip();
  } else {
    cpCmndCC = 0;
    ccToolTip();
  }
}

export function ccToolTip() {
  var ccBtnsList = getButtonsList("Closed Caption");

  ccBtnsList.forEach(function (ccBtn) {
    cpCmndCC === 0
      ? ccBtn.setAttribute("title", "Closed Caption Open")
      : ccBtn.setAttribute("title", "Closed Caption Close");
  });
}

export function keepCCBoxOpen() {
  if (cpInfoCurrentSlide === 1 && !window.ccOpen) cpCmndCC = 0;

  // Checks if variable has changed for cc text hide and show
  cpAPIEventEmitter.addEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    ccToolTip,
    "cpInfoCurrentFrame"
  );

  // Prevents final cc text caption from closing cc text box
  if (currentSlide.audCC.length) {
    currentSlide.audCC[0].sf = 1;
    currentSlide.audCC[currentSlide.audCC.length - 1].ef =
      lastFrame - firstFrame;
  }
}
