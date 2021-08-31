import { applyStyles } from "../../../utilities/utilities";

/************************
  CC Box set Postion
*************************/

export function ccSetBoxPos_auto() {
  const $ccTextBox = document.getElementById("cc");

  applyStyles(ccBoxPos, $ccTextBox);
}

/************************
  CC Box Position
*************************/

const ccBoxPos = [
  ["top", "88%"],
  ["padding-bottom", "4px"],
];
