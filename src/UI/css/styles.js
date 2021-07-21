import { getElement } from "../../global/globalFunctions";

export function createStyleTag() {
  const $styleElm = document.createElement("style");
  $styleElm.setAttribute("data-styles", "cssRules");
  document.head.appendChild($styleElm);
}

export function addCssRules(cssRules) {
  const $styleElm = getElement("cssRules", "obj", "style", "styles");

  if ($styleElm.innerText.indexOf(cssRules) === -1) {
    $styleElm.innerText += cssRules;
  }
}
