export function setDataButton(elm) {
  const {
    browserType: { isIE },
  } = window.cpGlobalObj;

  let $setDataAttr;

  if (isIE) {
    $setDataAttr = $(`p:contains(${elm})`).parent().parent();
  } else {
    $setDataAttr = $(`div[aria-label="${elm} "]`);
  }

  $setDataAttr.attr("data-button", elm);
  return $setDataAttr;
}
