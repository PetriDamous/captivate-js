import { getButtonsList } from "../globalButton";
import { setGlobalValue, fetchGlobal } from "../../global/global";

export function ccFunc_auto() {
  if (cpCmndCC === 0) {
    setGlobalValue("isCcOnEnter_auto", true);
    // window.ccOpen = true;
    cpCmndCC = 1;
    cp.hide("ccClose");
    ccToolTip_auto();
  } else {
    cpCmndCC = 0;
    ccToolTip_auto();
    setGlobalValue("isCcOnEnter_auto", true);
  }
}

export function ccToolTip_auto() {
  var ccBtnsList = getButtonsList("Closed Caption");

  ccBtnsList.forEach(function (ccBtn) {
    cpCmndCC === 0
      ? ccBtn.setAttribute("title", "Closed Caption Open")
      : ccBtn.setAttribute("title", "Closed Caption Close");
  });
}

export function ccBoxOnEnter_auto() {
  var currentSlide = fetchGlobal("currentSlide");
  var lastFrame = fetchGlobal("lastFrame");
  var firstFrame = fetchGlobal("firstFrame");

  if (cpInfoCurrentSlide === 1 && fetchGlobal("isCcOnEnter_auto")) cpCmndCC = 0;

  // Checks if variable has changed for cc text hide and show
  cpAPIEventEmitter.addEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    ccToolTip_auto,
    "cpInfoCurrentFrame"
  );

  // Prevents final cc text caption from closing cc text box
  if (currentSlide.audCC.length) {
    currentSlide.audCC[0].sf = 1;
    currentSlide.audCC[currentSlide.audCC.length - 1].ef =
      lastFrame - firstFrame;
  }
}
