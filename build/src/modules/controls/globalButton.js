// Grabs element
function getElement (attribute, property) {
    return property === "obj" ?  $('div[data-button="' + attribute + '"]') : $('div[data-button="' + attribute + '"]').attr("id");            
}

// When mute is on keeps audio muted on slide change
function stayMute () { 
    if(cpCmndMute == true){ 
        cpCmndMute = true; 
    } else { 
        cpCmndMute = false; 
    } 
}

// Hides and shows play and pause
function hidePlay () {           
    cp.hide(getElement("Play", "id"));
    cp.show(getElement("Pause", "id"));                
}

// Hides pause and shows play
function hidePause () {
    cp.show(getElement("Play", "id"));
    cp.hide(getElement("Pause", "id"));
}

// Hide mute shows unmute
function hideMute () {
    cp.show(getElement("Unmute", "id"));
    cp.hide(getElement("Mute", "id"));
}

// Hide unmute shows mute
function hideUnmute () {
    cp.show(getElement("Mute", "id"));
    cp.hide(getElement("Unmute", "id"));
}

// Rests UI controls when entering new slide
function slideRest() {
    cpCmndTOCVisible = 0;
    hidePlay();
    stayMute();
}

// Custom play function for WQP
// Place inside of play button
function videoPlay () {
    if(cpInfoCurrentSlideLabel.indexOf("Intro Video") !== -1) {
        cp.hide("SmartShape_114");
        cp.hide("Image_372");
        cp.hide("Image_371");
        cp.hide("Image_370");
    }
}

function disableMenuStyle () {
    var menuBtn = document.querySelectorAll('div[title="Menu"]');               
    for (var i = 0; i < menuBtn.length; i++) {                    
        var menuItemCanvas = document.getElementById(menuBtn[i].id + "c");                    
        menuItemCanvas.style.opacity = ".5";
        menuBtn[i].style.cursor = "not-allowed";
    } 
}