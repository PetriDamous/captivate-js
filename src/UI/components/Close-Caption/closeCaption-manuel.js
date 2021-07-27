import { ccTextArray } from "./ccText/ccText";
import { getButtonsArray } from "../../uiFunctions";
import {
  fetchGlobal,
  setGlobalValue,
} from "../../../global/globalObjFunctions";
import { applyStyles } from "../../../utilities/utilities";
import { ccTextBoxCss, ccParagraphCss } from "./closeCaptionSettings";

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

function appendCCText() {
  const slideLabel = cpInfoCurrentSlideLabel.trim().toLowerCase();
  const $ccParagraph = document.getElementById("ccParagraph");

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
  const $closeCaptionBtns = getButtonsArray("Closed Caption");

  if (fetchGlobal("isCcOnEnter_manual")) {
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
  const $ccTextBox = document.getElementById("ccTextBox");

  if (fetchGlobal("isCcDisplay_manual")) {
    $ccTextBox.style.visibility = "visible";

    setGlobalValue("isCcOnEnter_manual", true);
    setGlobalValue("isCcDisplay_manual", !true);
    ccToolTip_manuel();
  } else {
    $ccTextBox.style.visibility = "hidden";
    setGlobalValue("isCcOnEnter_manual", !true);
    setGlobalValue("isCcDisplay_manual", true);
    ccToolTip_manuel();
  }
}

export function ccBoxOnEnter_manuel() {
  const ccElements = createCCElements();
  appendCCText();
  ccToolTip_manuel();

  const $ccTextBox = ccElements.textBoxElm;

  if (fetchGlobal("isCcOnEnter_manual")) {
    $ccTextBox.style.visibility = "visible";
  } else {
    $ccTextBox.style.visibility = "hidden";
  }
}
