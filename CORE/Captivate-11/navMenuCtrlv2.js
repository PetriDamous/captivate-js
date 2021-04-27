$(document).ready(function() {
        
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

        // Controls position of progress bar
        var proPos = 'absolute';
        var proTop = '87%';
        var proLeft = '6%';
        var proWidth = '1123px';
        var proHeight = '5px';

        // Controls position of duration timer and color
        var durationTimePos = 'absolute';
        var durationTimeTop = '95%';
        var durationTimeLeft = '85%';
        var durationTimeColor = 'white';

        // Controls position of current time timer and color
        var currentTimePos = 'absolute';
        var currentTimeTop = '95%';
        var currentTimeLeft = '9%';
        var currentTimeColor = 'white';

        // Progress Bar styles
        function progressStyle() {

            if (isIE || isEdge) {
                
               var edgeIE = {
                    ms_track: [
                        '#seekerBar::-ms-track {',
                        // Change styles below //
                        
                        'background: transparent;',
                        'border-color: transparent;',
                        'color: transparent;',

                        // Change styles above //
                        '}'

                    ].join(''),

                    ms_thumb: [
                        '#seekerBar::-ms-thumb {',
                        // Change styles below //

                        'height: 0px;',
                        'width: 0px;',                            

                        // Change styles above //
                        '}'
                    ].join(''),

                    ms_fill_lower: [
                        '#seekerBar::-ms-fill-lower {',

                        // Change styles below //

                        'border: none;',
                        'background: linear-gradient(to bottom, rgba(165,201,86,1) 38%,rgba(205,235,142,1) 76%);',                            

                        // Change styles above // 
                        '}'             

                    ].join(''),

                    ms_fill_upper: [
                        '#seekerBar::-ms-fill-upper {',
                        // Change styles below //

                                                   

                        // Change styles above //
                        '}'                            
                    ].join('')

               } 

                return edgeIE.ms_track + edgeIE.ms_thumb + edgeIE.ms_fill_lower;
            }

            if (isFirefox) {
                
                var fireFox = {
                    moz_input: [
                        '#seekerBar {',

                        // Change styles below //
                        'background-color: transparent;',
                        


                        // Change styles above //
                        '}'
                    ].join(''),

                    moz_range_track: [
                        '#seekerBar::-moz-range-track {',

                        // Change styles below //
                        'background-color: transparent;',
                        'border: none;',


                        // Change styles above //
                        '}'
                    ].join(''),

                    moz_range_thumb: [
                        '#seekerBar::-moz-range-thumb {',

                        // Change styles below //

                        'height: 0px;',
                        'width: 0px;',
                        'border: none;',

                        // Change styles above //
                        '}'
                    ].join(''),

                    moz_range_progress: [
                        '#seekerBar::-moz-range-progress {',

                        // Change styles below //
                        'border: none;',
                        'background: -moz-linear-gradient(-45deg, rgba(165,201,86,1) 22%, rgba(205,235,142,1) 91%);',


                        // Change styles above //
                        '}'
                    ].join(''),
                }
                
                return fireFox.moz_input + fireFox.moz_range_track + fireFox.moz_range_thumb + fireFox.moz_range_progress;
            }

            if (isChrome) {
                
                var chrome = {

                    inputRngI: [
                        'input[type="range" i]  {',

                        // Change styles below //

                        '-webkit-appearance: none;',
                        'color: transparent;',
                        'cursor: default;',
                        'padding: initial;',
                        'border: none;',
                        'margin: 2px;',
                        

                        // Change styles above //

                        '}'

                    ].join(''),
                    

                    inputRng: [
                        'input[type="range"] {',

                        // Change styles below //

                        'overflow: hidden;',
                        '-webkit-appearance: none;',
                        'border: none;',

                        // Change styles above //

                        '}'

                    ].join(''),

                    runTrack: [
                        'input[type="range"]::-webkit-slider-runnable-track {',

                        // Change styles below //

                        'height: 5px;',
                        '-webkit-appearance: none;',
                        'border: none;',

                        // Change styles above //

                        '}'

                    ].join(''),

                    slideThumb: [
                        'input[type="range"]::-webkit-slider-thumb {',

                        // Change styles below //

                        'width: 0px;',
                        '-webkit-appearance: none;',
                        'box-shadow: -800px 0 0 800px #c0e07b;',


                        // Change styles above //

                        '}'

                    ].join(''),

                    inputFcs: [
                        'input[type="range"]:focus {',

                        // Change styles below //

                        'outline: none;',

                        // Change styles above //

                        '}'

                    ].join('')
                }                

                return chrome.inputRngI + chrome.inputRng + chrome.runTrack + chrome.slideThumb + chrome.inputFcs
            }
            
        }         
        
        /////////////////////////// Global Variables ////////////////////////////////              
        
        // Grabs the list of slides from the project and splits them into an array
        var slides = cp.model.data.project_main.slides.split(',');

        // Current Slide
        var currentSlide = cp.model.data[slides[window.cpInfoCurrentSlide - 1]];

        // lastFrame is the last frame for the current slide
        var lastFrame = currentSlide.to;

        // firstFrame is the starting frame 
        var firstFrame = currentSlide.from;
        
        // Checks for audio on slide
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


        // Removes progress bar and timer from Learning Check slides and slides with no audio

        var slideLabel = cpInfoCurrentSlideLabel.slice(0, 14);        

        if (slideLabel === 'Learning Check' || !slideAudio) {
            progress = false;
            timer = false;
        }
        
        ///////////// Progress bar ////////////////////////////

        ///////////////////// Setup and controls progress bar /////////////////////////////////////////////////////
        
        if (progress) {

            // Creates Progress Bar
            var playBar = document.createElement('input');            

            playBar.id = 'seekerBar';
            playBar.type = 'range';
            playBar.value = '0';
            playBar.step = '1';
            playBar.min = firstFrame;
            playBar.max = lastFrame;            
            
            
            // Places Progress Bar on slide
            $("#div_Slide").append(playBar);

            // Positions Progress Bar            
            $('#seekerBar').css({
                'position': proPos, 
                'top': proTop, 
                'left': proLeft,
                'width': proWidth,                
                'z-index': 3000,
                'height': proHeight                
            });

            // Disables playBar Control
            playBar.disabled = true;

            // Progress Bar style
            var sheet = document.createElement('style');            
            document.head.appendChild(sheet);
            sheet.innerHTML = progressStyle();
            
            cpAPIEventEmitter.addEventListener("CPAPI_VARIABLEVALUECHANGED", seekUpdate, "cpInfoCurrentFrame");

            function seekUpdate() { playBar.valueAsNumber = cpInfoCurrentFrame; }  


            // https://www.w3.org/wiki/Dynamic_style_-_manipulating_CSS_with_JavaScript


            // Progress Bar rewind
            
            /*if (isIE) {				
                seekerBar.addEventListener("change", vidSeek, false);						
            } else {
                seekerBar.addEventListener("input", vidSeek, false);
            } 

            function vidSeek() {            
                 if (playBar.valueAsNumber < cpInfoCurrentFrame) {
                    cpCmndGotoFrameAndResume = playBar.valueAsNumber
                } else {
                    playBar.valueAsNumber = cpInfoCurrentFrame
                }
            }*/
            
        }

        /////////////////////// Timer //////////////////////////////////////////////

        if (timer) {

            ///////////// Duration Time ///////////////////

            // Creates Duration time
            var durationTime = document.createElement('div');

            durationTime.id = 'duration-time';
            durationTime.style.position = durationTimePos;
            durationTime.style.top = durationTimeTop;
            durationTime.style.left = durationTimeLeft;
            durationTime.style.color = durationTimeColor;
            durationTime.style.zIndex = 3000;

            $("#div_Slide").append(durationTime);
            
            var durationFrames = lastFrame - firstFrame;        
            var durationFps = cpInfoFPS;
            var durationSeconds = durationFrames / durationFps;    
            var durationHrs = 0;    
            var durationMin = 0;    
            var durationSec = 0;            
            
            function setDuration() {                   
            
                /*hour*/            
                
                if (durationSeconds > 3600) {
                    
                    if (cpInfoCurrentFrame === firstFrame) {

                        durationHrs = '00';

                    } else if (durationHrs > 9) {

                        durationHrs = Math.floor((durationSeconds / 3600)).toFixed(0);

                    } else {

                        durationHrs = '0' + Math.floor((durationSeconds / 3600)).toFixed(0);
                    }       
                }      
            
                /*minutes*/        
            
                if (durationSeconds / 3600 - (Math.floor(durationSeconds / 3600)).toFixed(0) < 1) {

                    if (cpInfoCurrentFrame === firstFrame) {

                        durationMin = '00'

                    } else if (durationMin > 9) {            

                        durationMin = Math.floor((durationSeconds / 3600 - (Math.floor(durationSeconds / 3600).toFixed(0))) * 60).toFixed(0);

                    } else {

                        durationMin = '0' + Math.floor((durationSeconds / 3600 - (Math.floor(durationSeconds / 3600).toFixed(0))) * 60).toFixed(0);                   

                    }        
                }
            
                /*seconds*/            
            
                if (durationSeconds / 3600 - (Math.floor(durationSeconds / 3600)).toFixed(0) < 1) {                

                    if (cpInfoCurrentFrame === firstFrame) {

                        durationSec = '00'

                    } else if (durationSec > 9) {            

                        durationSec = ((((durationSeconds / 3600 - Math.floor(durationSeconds / 3600)) * 60) - Math.floor(((durationSeconds / 3600 - Math.floor(durationSeconds / 3600)) * 60))) * 60).toFixed(0);

                    } else {

                        durationSec = '0' +  ((((durationSeconds / 3600 - Math.floor(durationSeconds / 3600)) * 60) - Math.floor(((durationSeconds / 3600 - Math.floor(durationSeconds / 3600)) * 60))) * 60).toFixed(0);                    

                    }   
                
                }
                
                 // Takes out extra zero when counter hits 10
                 if (durationHrs.length === 3) {
                  durationHrs = durationHrs.slice(1)
                 }  
             
                 if (durationMin.length === 3) {
                  durationMin = durationMin.slice(1)
                 }  
             
                 if (durationSec.length === 3) {
                  durationSec = durationSec.slice(1)
                 }  

                durationTime.textContent = durationMin + ':' + durationSec
            }

            setDuration();

            ///////////// Current Time ///////////////////

            // Current time variables                        
            var timeInSeconds;        
            var fps = cpInfoFPS;    
            var timeHrs = 0;    
            var timeMin = 0;    
            var timeSec = 0;
            
            // Creates Current time 
            var currentTime = document.createElement('div');        

            currentTime.id = 'current-time';
            currentTime.style.position = currentTimePos;
            currentTime.style.top = currentTimeTop;
            currentTime.style.left = currentTimeLeft;
            currentTime.style.color = currentTimeColor;
            currentTime.style.zIndex = 3000;

            $("#div_Slide").append(currentTime);

            // Event and functions that control current time timer
            cpAPIEventEmitter.addEventListener("CPAPI_VARIABLEVALUECHANGED", getTimeStamp, "cpInfoCurrentFrame");

            function getTimeStamp() {      

               var numOfFrm = cpInfoCurrentFrame - firstFrame; 
            
               timeInSeconds = numOfFrm / fps;

               // Takes out extra zero when counter hits 10
               if (timeHrs.length === 3) {
                timeHrs = timeHrs.slice(1)
               }  

               if (timeMin.length === 3) {
                timeMin = timeMin.slice(1)
               }  

               if (timeSec.length === 3) {
                timeSec = timeSec.slice(1)
               }      
           
                /*hour*/            
           
                if (timeInSeconds > 3600) {

                    if (cpInfoCurrentFrame === firstFrame) {

                        timeHrs = '00';

                    } else if (timeHrs > 9) {

                        timeHrs = Math.floor((timeInSeconds / 3600)).toFixed(0);

                    } else {

                        timeHrs = '0' + Math.floor((timeInSeconds / 3600)).toFixed(0);
                    }       
                }      
            
                /*minutes*/        
            
                if (timeInSeconds / 3600 - (Math.floor(timeInSeconds / 3600)).toFixed(0) < 1) {

                    if (cpInfoCurrentFrame === firstFrame) {

                        timeMin = '00'

                    } else if (timeMin > 9) {            

                        timeMin = Math.floor((timeInSeconds / 3600 - (Math.floor(timeInSeconds / 3600).toFixed(0))) * 60).toFixed(0);

                    } else {

                        timeMin = '0' + Math.floor((timeInSeconds / 3600 - (Math.floor(timeInSeconds / 3600).toFixed(0))) * 60).toFixed(0);                   

                    }        
                }
            
                /*seconds*/            
            
                if (timeInSeconds / 3600 - (Math.floor(timeInSeconds / 3600)).toFixed(0) < 1) {                

                    if (cpInfoCurrentFrame === firstFrame) {

                        timeSec = '00'

                    } else if (timeSec > 9) {            

                        timeSec = ((((timeInSeconds / 3600 - Math.floor(timeInSeconds / 3600)) * 60) - Math.floor(((timeInSeconds / 3600 - Math.floor(timeInSeconds / 3600)) * 60))) * 60).toFixed(0);

                    } else {

                        timeSec = '0' +  ((((timeInSeconds / 3600 - Math.floor(timeInSeconds / 3600)) * 60) - Math.floor(((timeInSeconds / 3600 - Math.floor(timeInSeconds / 3600)) * 60))) * 60).toFixed(0);                    

                    }   
                
                } 

                currentTime.textContent = timeMin + ':' + timeSec

            }
        }        
});