// Rewind        
$(getElement("Rewind", "obj")).click(function () {    
    var rewindTime = 90;
    
    if(cpInfoCurrentFrame != firstFrame && cpInfoCurrentFrame > (firstFrame + rewindTime)) {
        cpCmndGotoFrameAndResume = cpInfoCurrentFrame - rewindTime;
        hidePlay();
        stayMute();
        cpCmndTOCVisible = 0;       
    }
    
    else{
        cpCmndGotoFrameAndResume = firstFrame;
        hidePlay();
        stayMute();
        cpCmndTOCVisible = 0;        			
    }
});