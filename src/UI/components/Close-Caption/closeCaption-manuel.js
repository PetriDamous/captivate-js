import { ccTextArray } from "./ccText/ccText";
import { getButtonsArray } from "../../uiFunctions";
import {
  fetchGlobal,
  setGlobalValue,
} from "../../../global/globalObjFunctions";
import { applyStyles } from "../../../utilities/utilities";
import { ccTextBoxCss, ccParagraphCss } from "./closeCaptionSettings";

export function ccBoxOnEnter_manuel() {
  const ccElements = createCCElements();

  const { isCcOnEnter_manual } = fetchGlobal("ccOptions");

  appendCCText(ccElements);
  ccToolTip_manuel();

  const $ccTextBox = ccElements.textBoxElm;

  if (isCcOnEnter_manual) {
    $ccTextBox.style.visibility = "visible";
  } else {
    $ccTextBox.style.visibility = "hidden";
  }
}

function createCCElements() {
  const $ccBox = document.createElement("div");
  const $ccPara = document.createElement("p");
  $ccBox.id = "ccTextBox";
  $ccPara.id = "ccParagraph";

  document.querySelector("#div_Slide").appendChild($ccBox);
  document.querySelector("#ccTextBox").appendChild($ccPara);

  const $ccTextBox = document.getElementById("ccTextBox");
  const $ccParagraph = document.getElementById("ccParagraph");

  applyStyles(ccTextBoxCss, $ccTextBox);

  applyStyles(ccParagraphCss, $ccParagraph);

  return {
    paragraphElm: $ccParagraph,
    textBoxElm: $ccTextBox,
  };
}

function appendCCText({ paragraphElm }) {
  const slideLabel = cpInfoCurrentSlideLabel.trim().toLowerCase();

  const $ccParagraph = paragraphElm;

  for (let i = 0; i < ccTextArray.length; i++) {
    if (ccTextArray[i].slide.trim().toLowerCase() === slideLabel) {
      $ccParagraph.textContent = ccTextArray[i].text;
      return;
    } else {
      $ccParagraph.textContent = "No Audio";
    }
  }
}

function ccToolTip_manuel() {
  const { isCcOnEnter_manual } = fetchGlobal("ccOptions");

  const $closeCaptionBtns = getButtonsArray("Closed Caption");

  if (isCcOnEnter_manual) {
    $closeCaptionBtns.forEach((ccBtn) => {
      ccBtn.setAttribute("title", "Closed Caption Close");
    });
    return;
  } else {
    $closeCaptionBtns.forEach((ccBtn) => {
      ccBtn.setAttribute("title", "Closed Caption Open");
    });
    return;
  }
}

export function ccFunc_manual() {
  const { isCcDisplay_manual } = fetchGlobal("ccOptions");

  const $ccTextBox = document.getElementById("ccTextBox");

  if (isCcDisplay_manual) {
    $ccTextBox.style.visibility = "visible";

    setGlobalValue("ccOptions", {
      ...cpGlobalObj.ccOptions,
      isCcOnEnter_manual: true,
    });

    setGlobalValue("ccOptions", {
      ...cpGlobalObj.ccOptions,
      isCcDisplay_manual: !true,
    });

    ccToolTip_manuel();
  } else {
    $ccTextBox.style.visibility = "hidden";

    setGlobalValue("ccOptions", {
      ...cpGlobalObj.ccOptions,
      isCcOnEnter_manual: !true,
    });

    setGlobalValue("ccOptions", {
      ...cpGlobalObj.ccOptions,
      isCcDisplay_manual: true,
    });

    ccToolTip_manuel();
  }
}
