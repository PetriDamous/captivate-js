var toolTipArray = [
    "Pause",
    "Play",
    "Closed Caption",
    "Mute",
    "Unmute",
    "Replay",
    "Rewind",
    "Previous",
    "Next",
    "Menu",
    "Help",
    "Options",
    "Exit",
    "Resources"
];

toolTipArray.forEach(function(elm, idx) {
    var setDataAttr;
    
    if (isIE) {                
        setDataAttr = $("p:contains(" + toolTipArray[idx] + ")" ).parent().parent();
        
    } else {
        setDataAttr = $('div[aria-label="' + toolTipArray[idx] + " " + '"]');
    }
    
    setDataAttr.attr("data-button", toolTipArray[idx]);
    setDataAttr.attr("title", toolTipArray[idx]);
    setDataAttr.css("cursor", "pointer");                      
    
});