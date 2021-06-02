import { isIE } from "../global/global";

function initialize() {
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
    console.log(setDataAttr);
    setDataAttr.attr("data-button", elm);
    setDataAttr.attr("title", elm);
    setDataAttr.css("cursor", "pointer");
  });
}

export default initialize;
