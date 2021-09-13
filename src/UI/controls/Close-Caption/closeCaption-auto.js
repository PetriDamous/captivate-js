import { getButtonsArray } from "../../uiFunctions";
import { fetchGlobal } from "../../../global/globalObjFunctions";
import { ccSetBoxPos_auto } from "./closeCaptionSettings-auto";

/***************************************
  Variables
****************************************/
let open = 1;
let close = 0;

/***************************************
  Main CC functions
****************************************/

// Opens and closes CC box
export function ccFunc_auto() {
  if (cpCmndCC === close) {
    cpCmndCC = open;
    cp.hide("ccClose");
    ccToolTip_auto();
  } else {
    cpCmndCC = close;
    ccToolTip_auto();
  }
}

// Changes CC tool tip if CC is open or closed
function ccToolTip_auto() {
  const ccBtnsArray = getButtonsArray("Closed Caption");

  ccBtnsArray.forEach(function (ccBtn) {
    cpCmndCC === close
      ? ccBtn.setAttribute("title", "Closed Caption Open")
      : ccBtn.setAttribute("title", "Closed Caption Close");
  });
}

/***************************************
  - Keeps CC box open on slide enter
  - Keeps CC box open at end of slide
****************************************/
export function ccBoxOnEnter_auto() {
  const {
    currentSlide: { to: lastFrame, audCC },
  } = fetchGlobal("slideData");

  const { isCCRepostion } = fetchGlobal("ccOptions_auto");

  // Added frames to help keep CC text box open
  // on slide completion
  const framesAdded = 300;

  // Subtracts frames to help keep CC text box open
  // when slide transition occurs
  const framesSubtracted = -300;

  // Repositions CC Box
  if (isCCRepostion) {
    ccSetBoxPos_auto();
  }

  ccToolTip_auto();

  // Checks if variable has changed for cc text hide and show
  cpAPIEventEmitter.addEventListener(
    "CPAPI_VARIABLEVALUECHANGED",
    ccToolTip_auto,
    "cpInfoCurrentFrame"
  );

  // Prevents final cc text caption from closing cc text box
  if (audCC.length) {
    audCC[0].sf = framesSubtracted;
    audCC[audCC.length - 1].ef = lastFrame + framesAdded;
  }
}
