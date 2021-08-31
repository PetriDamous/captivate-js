import { setGlobalValue } from "../../global/globalObjFunctions";
import { setToolTips } from "../data-buttons/toolTips";
import { setExtraDataBtn } from "../data-buttons/extraDataBtns";
import { setBtnEvents } from "../controls/Button-Events/buttonEvents";
import { ccBoxOnEnter_manuel } from "../components/Close-Caption/closeCaptionDOM-manuel";
import { ccBoxOnEnter_auto } from "../controls/Close-Caption/closeCaption-auto";
import { ProgressBarInitialize } from "../components/Progress-Bar/progressBarDOM";
import { slideRest } from "../uiFunctions";
import { videoInitialize } from "../controls/Video/video";
import { SCORM_2004_completion } from "../../SCORM/SCORM";
import { disableMenuStyle } from "../controls/Menu/menuBtn";
import { timerInitialize } from "../components/Timer/timerDOM";

export function initialize(cpEvent) {
  /**********************************
    Update values in global object
  ***********************************/

  setGlobalValue("slideData", {
    ...cpGlobalObj.slideData,
    currentSlide: { ...cpEvent.cpData },
  });

  /***********************************
    Core UI button related functions
  ************************************/

  setToolTips();
  setExtraDataBtn();
  setBtnEvents();

  /***************
    Rest slide
  ****************/

  slideRest();

  /****************
    CC text
  *****************/

  ccBoxOnEnter_auto();
  // ccBoxOnEnter_manuel();

  /***************
    Progress Bar 
  ****************/

  ProgressBarInitialize();

  /**********
    Video 
  ***********/

  // videoInitialize();

  /**********
    SCORM
  ***********/

  // SCORM_2004_completion();

  /***************
    Disables UI
  ****************/

  disableMenuStyle();

  /**********
    Timer
  ***********/

  timerInitialize();
}
