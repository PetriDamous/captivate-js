// Play        
$(getElement("Play", "obj")).click(function () {
 
    if (cpInfoCurrentFrame < (lastFrame - 1)) {              
        cpCmndResume = 1;
        hidePlay();
        stayMute();                
    } else {
        cpCmndPause = 1;
        hidePlay();                 
    }   
});