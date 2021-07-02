import { setDataButton } from "./data-btn-utility";

export function setExtraDataBtn() {
  var extraElementArray = ["Next_hide"];

  extraElementArray.forEach(function (elm) {
    var setDataAttr = setDataButton(elm);
    setDataAttr.attr("data-button", elm);
  });
}
