import { ccTextArray } from "./ccText/ccText";
import { fetchGlobal } from "../../../global/globalObjFunctions";
import { applyStyles } from "../../../utilities/utilities";
import { ccTextBoxCss, ccParagraphCss } from "./closeCaptionSettings-manuel";
import { ccToolTip_manuel } from "./closeCaptionFunctions-manuel";

/**********************************
  Handles CC on slide enter
**********************************/

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

/**********************************
  Creates CC elements
**********************************/

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

/**********************************
  Places CC text in text box
**********************************/

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
