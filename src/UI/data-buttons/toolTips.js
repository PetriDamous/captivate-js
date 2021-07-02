import { setDataButton } from "./data-btn-utility";

export function setToolTips() {
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
    "Resources",
    "Exit",
    "Replay",
    "Mute",
    "Unmute",
    "Closed Caption",
    "Help",
  ];

  toolTipArray.forEach(function (elm) {
    var setDataAttr = setDataButton(elm);

    setDataAttr.attr("data-button", elm);
    setDataAttr.attr("title", elm);
    setDataAttr.css("cursor", "pointer");
  });
}
