import { ccTextArray } from "../../../ccText/ccText";
import { getButtonsList } from "../../../modules/controls/globalButton";
import { fetchGlobal, setGlobalValue } from "../../../modules/global/global";
import { applyStyles } from "../../utility";
import { ccTextBoxCss, ccParagraphCss } from "./closeCaptionSettings";

function createCCElements() {
  var $ccBox = document.createElement("div");
  var $ccPara = document.createElement("p");
  $ccBox.id = "ccTextBox";
  $ccPara.id = "ccParagraph";

  document.querySelector("#div_Slide").appendChild($ccBox);
  document.querySelector("#ccTextBox").appendChild($ccPara);

  var $ccTextBox = document.getElementById("ccTextBox");
  var $ccParagraph = document.getElementById("ccParagraph");

  applyStyles(ccTextBoxCss, $ccTextBox);

  applyStyles(ccParagraphCss, $ccParagraph);

  return {
    paragraphElm: $ccParagraph,
    textBoxElm: $ccTextBox,
  };
}

function appendCCText() {
  var slideLabel = cpInfoCurrentSlideLabel.trim().toLowerCase();
  var $ccParagraph = document.getElementById("ccParagraph");

  for (var i = 0; i < ccTextArray.length; i++) {
    if (ccTextArray[i].slide.trim().toLowerCase() === slideLabel) {
      $ccParagraph.textContent = ccTextArray[i].text;
      break;
    } else {
      $ccParagraph.textContent = "No Audio";
    }
  }
}

function ccToolTip_manuel() {
  var $closeCaptionBtns = getButtonsList("Closed Caption");

  if (fetchGlobal("isCcOnEnter_manual")) {
    $closeCaptionBtns.forEach(function (ccBtn) {
      ccBtn.setAttribute("title", "Closed Caption Close");
    });
    return;
  } else {
    $closeCaptionBtns.forEach(function (ccBtn) {
      ccBtn.setAttribute("title", "Closed Caption Open");
    });
    return;
  }
}

export function ccFunc_manual() {
  var $ccTextBox = document.getElementById("ccTextBox");

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
  var ccElements = createCCElements();
  appendCCText();
  ccToolTip_manuel();

  var $ccTextBox = ccElements.textBoxElm;

  if (fetchGlobal("isCcOnEnter_manual")) {
    $ccTextBox.style.visibility = "visible";
  } else {
    $ccTextBox.style.visibility = "hidden";
  }
}
