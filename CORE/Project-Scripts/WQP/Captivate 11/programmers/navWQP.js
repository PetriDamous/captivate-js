$(document)
    .ready(function() {
        
        cpCmndShowPlaybar = false;


        
        ///////////// Used to check for browser type ////////////////////////////////
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;
        var isChrome = navigator.webkitGetUserMedia;  
        
        /////////////// Component Properties ///////////////////////////
        
        // Turns Progress bar on and off
        var progress = false;

        // Turns Timer on and off
        var timer = false;
        
        // Controls the amount of time for rewind feature
        var rewindTime = 90;

        // Controls TOC height
        var tocFooter = '585px';
        var tocContent = '509px';
        var toc = '605px'; 
        
        /////////////////////////// Global Variables ////////////////////////////////              
        
        // Grabs the list of slides from the project and splits them into an array
        var slides = cp.model.data.project_main.slides.split(',');         

        // Current Slide
        var currentSlide = cp.model.data[slides[window.cpInfoCurrentSlide - 1]];

        // lastFrame is the last frame for the current slide
        var lastFrame = currentSlide.to;

        // firstFrame is the starting frame 
        var firstFrame = currentSlide.from; 
        
        var slideAudio = currentSlide.audioName; 
        
        /////////////////////// Tool tips, Elements, ID ///////////////////////////////////////

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


        /////////////////////// Nav bar funtions ////////////////////////////
        
        // When mute is on keeps audio muted on slide change
        function stayMute(){ 
            if(cpCmndMute == true){ 
                cpCmndMute = true; 
            }
            else{ cpCmndMute = false } 
        }

        // Hides and shows play and pause
        function hidePlay(){
            // hide play            
            cp.hide(getElement("Play", "id"));
            // show pause
            cp.show(getElement("Pause", "id"));                
        }

        // Rests UI controls when entering new slide
        function slideRest(){
            cpCmndTOCVisible = false;
            cp.show(getElement("Pause", "id"));
            cp.hide(getElement("Play", "id"));
            stayMute();
        }        
         
        slideRest();        

        // Closes TOC and shows pause button when new slide is entered
        cpAPIEventEmitter.addEventListener("CPAPI_SLIDEENTER", slideRest);

        //////////////////////Nav bar control/////////////////////////////

        customSettings();

        // Pause        
        $(getElement("Pause", "obj")).click(function(){
            if (cpInfoCurrentFrame < (lastFrame - 1)) {
                cpCmndPause = true;                
                cp.hide(getElement("Pause", "id"));
                cp.show(getElement("Play", "id"));
            } else {
                cpCmndPause = true;                
            }
        });

        // Play        
        $(getElement("Play", "obj")).click(function(){
            if(cpInfoCurrentSlideLabel === "Intro Video") {
                cp.hide("SmartShape_114");
                cp.hide("Image_372");
                cp.hide("Image_371");
                cp.hide("Image_370");
            } 

            if (cpInfoCurrentFrame < (lastFrame - 1)) {              
                cpCmndResume = true;
                hidePlay();
                stayMute();                
            } else {
                cpCmndPause = true;
                hidePlay();                 
            }   

        });

        // Rewind        
        $(getElement("Rewind", "obj")).click(function(){
            //////////////////////////////////// Controls the rewinding of a slide ///////////////////////////////            
            
            if(cpInfoCurrentFrame != firstFrame && cpInfoCurrentFrame > (firstFrame + rewindTime)){
                cpCmndGotoFrameAndResume = cpInfoCurrentFrame - rewindTime;
                hidePlay();
                stayMute();
                cpCmndTOCVisible = false;       
            	}
            
            else{
                cpCmndGotoFrameAndResume = firstFrame
                hidePlay();
                stayMute();
                cpCmndTOCVisible = false;        			
            	}
        });

        // Replay button        
        $(getElement("Replay", "obj")).click(function(){
            // cpCmndGotoFrameAndResume = firstFrame;
            cpCmndGotoFrame = firstFrame;
            
            if (cpCmndPause) {
                setTimeout(function() {
                    cpCmndResume = true;
                }, 300);
            }            
            
            
            if(cpCmndTOCVisible == true){
                // Hides TOC
                cpCmndTOCVisible = false;
                hidePlay();
                stayMute();
            }
            else{ 
                hidePlay();
                stayMute(); 
            }
        });

        // Mute              
        $(getElement("Mute", "obj")).click(function(){
            cpCmndMute = true; 
            cp.hide(muteID);
            cp.show(unmuteID);       
        });

        // Unmute          
        $(getElement("Unmute", "obj")).click(function(){
            cpCmndMute = false;            
            cp.hide(unmuteID);
            cp.show(muteID);       
        });
        
        // CC button
        function ccToolTip(){
            if (cpCmndCC === 0) {                
                $(getElement("Closed Caption", "obj")).attr("title", "Closed Caption Open");         
               } else if (cpCmndCC == true) {
                $(getElement("Closed Caption", "obj")).attr("title", "Closed Caption Close");
            
                cp.hide('ccClose');
               }
        }

        $(getElement("Closed Caption", "obj")).click(function() {

            if (cpCmndCC === 0) {
                cpCmndCC = 1;
                ccToolTip();
               
            } else {               
                cpCmndCC = 0;
                ccToolTip();
                
            }
       
        });

        ccToolTip();        

        ///////////////// Menu/TOC Button Controls ////////////////         
           
        // Menu Funcitons

        // Controls TOC height

        $('#tocFooter').css('top', tocFooter);
        $('#tocContent').css('height', tocContent);
        $('#toc').css('height', toc);
       
        $(getElement("Menu", "obj")).click(function(){
            
            if(cpInfoCurrentSlideLabel === "Pre-Test" || cpInfoCurrentSlideLabel === "Pre-Test Results") {
                return;
            } else {
                if (cpCmndTOCVisible == false) {
                    cpCmndTOCVisible = true;
                } else {
                    cpCmndTOCVisible = false;
                }
            }           

        });
        

        /////////////////// Utility Functions ////////////////////////
        
        // Grabs element
        function getElement (attribute, property) {

            return property === "obj" ?  $('div[data-button="' + attribute + '"]') : $('div[data-button="' + attribute + '"]').attr("id");            
        }

        // Custome settings for cousrse lessons
        function customSettings () {            
  
            if(cpInfoCurrentSlideLabel === "Intro Video") {
                cp.show("SmartShape_114");
                cp.show("Image_372");
                cp.show("Image_371");
                cp.show("Image_370");
                cp.show(getElement("Play", "id"));
                cp.hide(getElement("Pause", "id"));
                cpCmndPause = true;
            }


            if (cpInfoCurrentSlideLabel === "Pre-Test") {
                cp.hide(getElement("Play", "id"));
                cp.hide(getElement("Pause", "id"));
                disableMenu();              
            }
            

            if (cpInfoCurrentSlideLabel === "Pre-Test Results") {
                disableMenu();
            }
            
            function disableMenu () {
                var menuBtn = document.querySelectorAll('div[title="Menu"]');               

                for (var i = 0; i < menuBtn.length; i++) {                    
                    var menuItemCanvas = document.getElementById(menuBtn[i].id + "c");                    
                    menuItemCanvas.style.opacity = ".5";
                    menuBtn[i].style.cursor = "not-allowed";
                } 
            }

        }
 
    });