import { fetchGlobal } from "../global/global";
import { clearStorageUnload } from "../utility";

export function SCORM_2004_completion() {
  var currentSlide = fetchGlobal("currentSlide");
  var lastSlide = fetchGlobal("lastSlide");

  // SCORM completion once final slide is reached
  if (currentSlide === lastSlide) {
    SCORM2004_CallSetValue("cmi.completion_status", SCORM2004_COMPLETED);
    SCORM2004_CallSetValue("cmi.sucess_status", SCORM2004_PASSED);

    clearStorageUnload();
  }
}
