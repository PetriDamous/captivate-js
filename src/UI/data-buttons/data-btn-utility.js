import { fetchGlobal } from "../../global/globalSettings";

export function setDataButton(elm) {
  const isIE = fetchGlobal("isIE");

  let $setDataAttr;

  if (isIE) {
    $setDataAttr = $(`p:contains(${elm})`).parent().parent();
  } else {
    $setDataAttr = $(`div[aria-label="${elm} "]`);
  }

  $setDataAttr.attr("data-button", elm);
  return $setDataAttr;
}
