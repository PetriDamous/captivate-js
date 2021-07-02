import { fetchGlobal } from "../global/global";

export function setDataButton(elm) {
  var isIE = fetchGlobal("isIE");

  var setDataAttr;

  if (isIE) {
    setDataAttr = $("p:contains(" + elm + ")")
      .parent()
      .parent();
  } else {
    setDataAttr = $('div[aria-label="' + elm + " " + '"]');
  }

  setDataAttr.attr("data-button", elm);
  return setDataAttr;
}
