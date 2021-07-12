import { fetchGlobal, setGlobalValue } from "../../global/globalSettings";
import { setToolTips } from "../data-buttons/toolTips";
import { setExtraDataBtn } from "../data-buttons/extraDataBtns";
import { setBtnEvents } from "../controls/Button-Events/buttonEvents";
import { ccBoxOnEnter_manuel } from "../components/Close-Caption/closeCaption-manuel";
import { ccBoxOnEnter_auto } from "../controls/Close-Caption/closeCaption-auto";
import { ProgressBarInitialize } from "../components/Progress-Bar/progressBar";
import { slideRest } from "../uiFunctions";
import { videoInitialize } from "../controls/Video/video";

export function initialize(cpEvent) {
  setGlobalValue("currentSlide", cpEvent.cpData);

  setToolTips();
  setExtraDataBtn();
  setBtnEvents();

  slideRest();
  ccBoxOnEnter_auto();
  // ccBoxOnEnter_manuel();
  ProgressBarInitialize();
  videoInitialize();
}
