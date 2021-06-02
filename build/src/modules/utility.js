// Custome settings for cousrse lessons
function customSettings () {
    
    if(cpInfoCurrentSlideLabel.indexOf("Intro Video") !== -1) {
        cp.show("SmartShape_114");
        cp.show("Image_372");
        cp.show("Image_371");
        cp.show("Image_370");
        cpCmndPause = true;
        hidePause();
    }

    if (cpInfoCurrentSlideLabel.indexOf("Pre-Test") !== -1) {
        cp.hide(getElement("Play", "id"));
        cp.hide(getElement("Pause", "id"));
        disableMenuStyle();              
    }

    if (cpInfoCurrentSlideLabel.indexOf("Pre-Test") !== -1) {
        disableMenuStyle();
    }
}