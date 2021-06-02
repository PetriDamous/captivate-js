///////////////// Menu/TOC Button Controls ////////////////

$(getElement("Menu", "obj")).click(function () {
    
    if (disableMenuAction()) return;
 
    if (cpCmndTOCVisible === 0) {
        cpCmndTOCVisible = 1;
    } else {
        cpCmndTOCVisible = 0;
    }
           
});