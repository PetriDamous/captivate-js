import { setDataButton } from "./data-btn-utility";

export function setToolTips() {
  const toolTipArray = [
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
    const $setDataAttr = setDataButton(elm);

    /******************
      Set Attributes
    *******************/

    $setDataAttr.attr("data-button", elm);
    $setDataAttr.attr("title", elm);

    /************
      Set CSS
    *************/

    $setDataAttr.css("cursor", "pointer");
  });
}
