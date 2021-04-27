// Pause        
$(getElement("Pause", "obj")).click(function () {
    if (cpInfoCurrentFrame < (lastFrame - 1)) {
        cpCmndPause = 1;                
        hidePause();
    } else {
        cpCmndPause = 1;
        hidePlay();                
    }
});