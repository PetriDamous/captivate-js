import { applyStyles } from "../../../utilities/utilities";
import { fetchGlobal } from "../../../global/globalObjFunctions";

/************************
  CC Box set Postion
*************************/

export function ccSetBoxPos_auto() {
  const { isIE } = fetchGlobal("browserType");

  const $ccTextBox = document.getElementById("cc");

  if (isIE) {
    applyStyles(ccBoxPosIE, $ccTextBox);
  } else {
    applyStyles(ccBoxPos, $ccTextBox);
  }
}

/****************************
  CC Box Position Settings
****************************/

const ccBoxPos = [
  ["top", "87%"],
  ["padding-bottom", "9px"],
];

const ccBoxPosIE = [
  ["top", "87%"],
  ["padding-bottom", "9px"],
];
