$(document).ready(initialize);

function initialize () {
    ///////////// Used to check for browser type ////////////////////////////////
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Grabs the list of slides from the project and splits them into an array
    var slidesArray = cp.model.data.project_main.slides.split(',');

    // Last slide of project
    var lastSlide = cp.model.data[slidesArray[slidesArray.length - 1]];

    // Current Slide
    var currentSlide = cp.model.data[slidesArray[window.cpInfoCurrentSlide - 1]];

    // firstFrame is the starting frame 
    var firstFrame = currentSlide.from;

    // lastFrame is the last frame for the current slide
    var lastFrame = currentSlide.to;

    // SCORM completion once final slide is reached
    if (currentSlide === lastSlide) {
        SCORM2004_CallSetValue("cmi.completion_status",SCORM2004_COMPLETED);
        SCORM2004_CallSetValue("cmi.sucess_status",SCORM2004_PASSED);
    }

    // Tool Tips
    var toolTipArray = [
        "Pause",
        "Play",
        "Closed Caption",
        "Previous",
        "Next",
        "Menu",
        "Help",
        "Exit",
        "Resources",
        "Rewind",
        "Play Video"
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

    // Buttons
    var playBtns = document.querySelectorAll('div[data-button="Play"]');
    var pauseBtns = document.querySelectorAll('div[data-button="Pause"]');

    // Button Array
    var playBtnsArray = Array.prototype.slice.call(playBtns);
    var pauseBtnsArray = Array.prototype.slice.call(pauseBtns);

    // Slide setup functions
    slideRest();
    disableNav(); 
    ccToolTip();
    videoRest();
    
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


    // Play        
    $(getElement("Play", "obj")).click(function () {
        videoPlay();

        if (cpInfoCurrentFrame < (lastFrame - 1)) {              
            cpCmndResume = 1;
            hidePlay();                
        } else {
            cpCmndPause = 1;
            hidePlay();                 
        }   
    });


    // Play button on video slide             
    $(getElement("Play Video", "obj")).click(function () {
        hidePlay();
    });

    ///////////////// Menu/TOC Button Controls ////////////////         

    // Controls TOC height
    var tocFooter = '585px';
    var tocContent = '509px';
    var toc = '605px';

    $('#tocFooter').css('top', tocFooter);
    $('#tocContent').css('height', tocContent);
    $('#toc').css('height', toc);

    $(getElement("Menu", "obj")).click(function () {

        if (disableMenuAction()) return;
    
        if (cpCmndTOCVisible == false) {
            cpCmndTOCVisible = true;
        } else {
            cpCmndTOCVisible = false;
        }

    });

    
    // Rewind fo video slide
    $(getElement("Rewind", "obj")).click(function () {    
        var rewindTime = 90;
        var rewindFromCurentFrame = cpInfoCurrentFrame - rewindTime;
        
        if (cpInfoCurrentFrame != firstFrame && cpInfoCurrentFrame > (firstFrame + rewindTime)) {  

            cpCmndPause ? cpCmndGotoFrame = rewindFromCurentFrame : cpCmndGotoFrameAndResume = rewindFromCurentFrame;            

            cpCmndTOCVisible = 0;       
        } else {

            cpCmndPause ? cpCmndGotoFrame = firstFrame : cpCmndGotoFrameAndResume = firstFrame; 
            
            cpCmndTOCVisible = 0;        			
        }
    });

    // CC Button

    // Keeps CC text box closed on load
    if (cpInfoCurrentSlide === 1 && !window.ccOpen)  cpCmndCC = 0; 
    
    // Checks if variable has changed for cc text hide and show
    cpAPIEventEmitter.addEventListener("CPAPI_VARIABLEVALUECHANGED", ccToolTip, "cpInfoCurrentFrame");

    // Prevents final cc text caption from closing cc text box 
    if (currentSlide.audCC.length) {
        currentSlide.audCC[currentSlide.audCC.length - 1].ef = lastFrame;
    }

    $(getElement("Closed Caption", "obj")).click(function () {
        window.ccOpen = 'true';

        if (cpCmndCC === 0) { 
            cpCmndCC = 1;          
            cp.hide('ccClose');
            ccToolTip();
           
        } else {
            cpCmndCC = 0; 
            ccToolTip();            
        }
    });
    
    ///////////////////////////
    // Functions
    //////////////////////////

    // Grabs element
    function getElement (attribute, property) {
        return property === "obj" ?  $('div[data-button="' + attribute + '"]') : $('div[data-button="' + attribute + '"]').attr("id");            
    }

    function videoPlay () {
        // Custom play function for WQP
        // Place inside of play button
        if (cpInfoCurrentSlideLabel.indexOf("Intro Video") !== -1) {
            cp.hide("SmartShape_114");
            cp.hide("Image_372");
            cp.hide("Image_371");
            cp.hide("Image_370");
        }
    }
    
    // Hides and shows play and pause
    function hidePlay () {
        playBtnsArray.forEach(function(elm, idx) {
            cp.hide(elm.id);
            cp.show(pauseBtnsArray[idx].id);
        });               
    }
    
    // Hides pause and shows play
    function hidePause () {
        pauseBtnsArray.forEach(function(elm, idx) {
            cp.hide(elm.id);
            cp.show(playBtnsArray[idx].id);
        });
    }
    
    // Rests UI controls when entering new slide
    function slideRest () {
        cpCmndTOCVisible = false;
        hidePlay();
    }    

    function ccToolTip () {        
        if (document.getElementById('cc').style.visibility) {                
            $(getElement("Closed Caption", "obj")).attr("title", "Closed Caption Open");         
        } else {
            $(getElement("Closed Caption", "obj")).attr("title", "Closed Caption Close");        
        }
    }

    function disableMenuAction () {

        return cpInfoCurrentSlideLabel.indexOf("Pre-Test") !== -1 ? true : false;

    }
    
    function disableMenuStyle () {
        var menuBtn = document.querySelectorAll('div[title="Menu"]');               
        for (var i = 0; i < menuBtn.length; i++) {                    
            var menuItemCanvas = document.getElementById(menuBtn[i].id + "c");                    
            menuItemCanvas.style.opacity = ".5";
            menuBtn[i].style.cursor = "not-allowed";
        }
    }     

    function videoRest () {        

        if (cpInfoCurrentSlideLabel.indexOf("Intro Video") !== -1) {
            var video = video = document.getElementById("slidevid0");
            video.pause()
            cp.show("SmartShape_114");
            cp.show("Image_372");
            cp.show("Image_371");
            cp.show("Image_370");
            cpCmndPause = 1;         
            hidePause(); 
        }
    }

    
    function disableNav () {
            
        if (cpInfoCurrentSlideLabel.indexOf("Pre-Test") !== -1) {
            cp.hide(getElement("Play", "id"));
            cp.hide(getElement("Pause", "id"));
            disableMenuStyle();              
        }

    }
}