import { clearStorageUnload } from "../global/globalFunctions";

export function SCORM_2004_completion() {
  const { currentSlide, lastSlide } = window.cpGlobalSetup;

  // SCORM completion once final slide is reached
  if (currentSlide === lastSlide) {
    SCORM2004_CallSetValue("cmi.completion_status", SCORM2004_COMPLETED);
    SCORM2004_CallSetValue("cmi.sucess_status", SCORM2004_PASSED);

    clearStorageUnload();
  }
}
