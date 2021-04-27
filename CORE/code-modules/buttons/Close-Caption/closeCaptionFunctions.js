function ccToolTip () {
    if (cpCmndCC === 0) {                
        $(getElement("Closed Caption", "obj")).attr("title", "Closed Caption Open");         
    } else if (cpCmndCC === 1) {
        $(getElement("Closed Caption", "obj")).attr("title", "Closed Caption Close");        
    }
}