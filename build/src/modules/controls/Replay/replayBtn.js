// Replay button        
$(getElement("Replay", "obj")).click(function () {
    cpCmndGotoFrame = firstFrame;
    
    if (cpCmndPause) {
        setTimeout(function () {
            cpCmndResume = 1;
        }, 300);
    }            
    
    
    if(cpCmndTOCVisible === 1) {
        cpCmndTOCVisible = 0;
        hidePlay();
        stayMute();
    } else { 
        hidePlay();
        stayMute(); 
    }
});