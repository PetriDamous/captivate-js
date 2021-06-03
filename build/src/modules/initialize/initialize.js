import { isIE } from "../global/global";

export default function initialize() {
  /////////////////////// Tool tips, Elements, ID ///////////////////////////////////////

  var toolTipArray = [
    "Menu",
    "Glossary",
    "Referneces",
    "Exit",
    "Closed Caption",
    "Play",
    "Pause",
    "Previous",
    "Next",
    "Rewind",
  ];

  toolTipArray.forEach(function (elm) {
    var setDataAttr;

    if (isIE) {
      setDataAttr = $("p:contains(" + elm + ")")
        .parent()
        .parent();
    } else {
      setDataAttr = $('div[aria-label="' + elm + " " + '"]');
    }

    setDataAttr.attr("data-button", elm);
    setDataAttr.attr("title", elm);
    setDataAttr.css("cursor", "pointer");
  });
}
