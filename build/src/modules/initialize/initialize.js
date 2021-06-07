import { isIE } from "../global/global";

export function initialize() {
  /////////////////////// Tool tips, Elements, ID ///////////////////////////////////////

  var toolTipArray = [
    "Menu",
    "Glossary",
    "Referneces",
    "Exit",
    "Play",
    "Pause",
    "Previous",
    "Next",
    "Rewind",
  ];

  toolTipArray.forEach(function (elm) {
    var setDataAttr = setDataButton(elm);

    setDataAttr.attr("data-button", elm);
    setDataAttr.attr("title", elm);
    setDataAttr.css("cursor", "pointer");
  });

  // Extra Elements
  var extraElementArray = ["Closed Caption", "Next_hide"];

  extraElementArray.forEach(function (elm) {
    var setDataAttr = setDataButton(elm);
    setDataAttr.attr("data-button", elm);
  });

  // Finds Element to set attributes on
  function setDataButton(elm) {
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
}
