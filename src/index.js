import { setupGlobal, setContentMeta } from "./global/globalSettings";
import { createStyleTag } from "./UI/components/Styles/styles";
import { initialize } from "./UI/initialize/initialize";
import { getButtonsList } from "./UI/uiFunctions";

window.addEventListener("load", function () {
  setContentMeta();
  setupGlobal();
  createStyleTag();
});

window.addEventListener("moduleReadyEvent", function (e) {
  window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", function (e) {
    $(document).ready(function () {
      initialize();
    });
  });

  window.cpAPIEventEmitter.addEventListener("CPAPI_SLIDEEXIT", function () {
    console.log("fuck");
  });
});
