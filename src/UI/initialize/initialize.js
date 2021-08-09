import { setGlobalValue } from "../../global/globalObjFunctions";
import { setToolTips } from "../data-buttons/toolTips";
import { setExtraDataBtn } from "../data-buttons/extraDataBtns";
import { setBtnEvents } from "../controls/Button-Events/buttonEvents";
import { ccBoxOnEnter_manuel } from "../components/Close-Caption/closeCaption-manuel";
import { ccBoxOnEnter_auto } from "../controls/Close-Caption/closeCaption-auto";
import { ProgressBarInitialize } from "../components/Progress-Bar/progressBar";
import { slideRest } from "../uiFunctions";
import { videoInitialize } from "../controls/Video/video";
import { SCORM_2004_completion } from "../../SCORM/SCORM";
import { disableMenuStyle } from "../controls/Menu/menuBtn";
import { timerInitialize } from "../components/Timer/timer";

export function initialize(cpEvent) {
  setGlobalValue("slideData", {
    ...cpGlobalObj.slideData,
    currentSlide: { ...cpEvent.cpData },
  });

  setToolTips();
  setExtraDataBtn();
  setBtnEvents();

  slideRest();
  // ccBoxOnEnter_auto();
  ccBoxOnEnter_manuel();
  ProgressBarInitialize();
  videoInitialize();
  // SCORM_2004_completion();
  disableMenuStyle();
  timerInitialize();
}
